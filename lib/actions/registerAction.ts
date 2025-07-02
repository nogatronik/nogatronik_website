"use server";
import { connectDB } from "@/lib/mongodb";
import { User, VerificationToken } from "@/models/User";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { sendVerificationEmail } from "../sendEmailVerf";
import { verifyCaptchaToken } from "@/utils/captcha";

interface RegisterFormData {
  name: string;
  lName: string;
  email: string;
  password: string;
  token?: string | null;
}

/**
 *
 * @param name: string
 * @param lName: string
 * @param email: string
 * @param password: string
 * @param token: string | null
 *
 * This server action receives the formData from the registration form and creates a user
 * in the database. Bcrypt is used to hash the password before storing it.
 *
 * return: null | mongoDB error
 */
export const register = async (values: RegisterFormData) => {
  // Variables
  const { email, password, name, lName, token } = values;

  // If there's no token, return
  if (!token) {
    return {
      error: "Token not valid",
    };
  }

  // Verify Token and receive response
  const captchaData = await verifyCaptchaToken(token);

  // If captchaData is null, return error
  if (!captchaData) {
    return {
      error: "Captcha Failed",
    };
  }

  /* 
  If captchaData fails, success is false, action isn't register, or score
  is less than .5, return failed registration
  */
  if (
    !captchaData.success ||
    captchaData.action !== "register" ||
    captchaData.score < 0.5
  ) {
    return {
      error: !captchaData.success
        ? captchaData["error-codes"].toString()
        : null,
    };
  }

  // if reCaptcha is successful continue with registration progress
  try {
    // Connect to DB
    await connectDB();

    // Variables (creates user)
    const userFound = await User.findOne({ email });
    if (userFound) {
      return {
        error: "Email already exists!",
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      lName,
      email,
      password: hashedPassword,
      emailVerified: false,
    });
    await user.save();

    // Creates verification token
    const token = uuidv4();
    const userToken = new VerificationToken({
      token,
      userId: user._id,
      expires: new Date(Date.now() + 1000 * 60 * 60), // Token expires in 1 hour
    });
    await userToken.save();

    // Send verification email for user to signin to web app
    await sendVerificationEmail(name, email, token);
  } catch (e) {
    console.log(e);
    throw new Error("Error during registration");
  }
};
