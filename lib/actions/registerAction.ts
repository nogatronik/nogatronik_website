"use server";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

import { connectDB } from "@/lib/mongodb";
import { verifyCaptchaToken } from "@/utils/captcha";
import { User, VerificationToken } from "@/models/User";
import { sendVerificationEmail } from "../sendEmailVerf";
import { registerSchema } from "@/lib/schemas/registerSchema";
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
export const register = async (formData: FormData) => {
  const formValues = Object.fromEntries(formData.entries());
  delete formValues.token;

  const zodResult = registerSchema.safeParse(formValues);
  if (!zodResult.success) {
    const inputErrors: Record<string, string[]> = {};
    zodResult.error.issues.forEach((issue) => {
      const field = String(issue.path[0]);
      if (!field) return;
      if (!inputErrors[field]) inputErrors[field] = [];
      inputErrors[field].push(issue.message);
    });
    return {
      success: false,
      message: "",
      error: "There are input errors",
      inputError: inputErrors,
    };
  }
  const token = formData.get("token") as string;
  // If there's no token, return
  if (!token) {
    return {
      success: false,
      message: "",
      error: "Token not valid",
    };
  }

  // Verify Token and receive response
  const captchaData = await verifyCaptchaToken(token);

  // If captchaData is null, return error
  if (!captchaData) {
    return {
      success: false,
      message: "",
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
    captchaData.score < 0.7
  ) {
    return {
      success: false,
      message: "",
      error: !captchaData.success ? captchaData["error-codes"].toString() : "",
    };
  }

  // if reCaptcha is successful continue with registration progress
  try {
    // Connect to DB
    await connectDB();
    const name = formData.get("fName") as string;
    const lName = formData.get("lName") as string;
    const email = formData.get("email") as string;
    const password = formData.get("pwd") as string;

    // Variables (creates user)
    const userFound = await User.findOne({ email });
    if (userFound) {
      console.log("Email already in use");
      return {
        success: false,
        message: "",
        error: "Email already in use",
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

    return {
      success: true,
      message: "Registration successful",
      error: "",
    };
  } catch (e) {
    console.log(e);
    throw new Error("Error during registration");
  }
};
