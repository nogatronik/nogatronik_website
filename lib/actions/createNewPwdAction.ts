"use server";
import { connectDB } from "@/lib/mongodb";
import { ResetPwdToken, User } from "@/models/User";
import bcrypt from "bcryptjs";
import { verifyCaptchaToken } from "@/utils/captcha";
import { validateResetToken } from "./validateResetTokenAction";

interface RegisterFormData {
  password: string;
  recapToken?: string | null;
  token?: string | undefined;
}

/**
 *
 * @param password: string
 * @param recapToken: string
 * @param token: string | null
 *
 * This server action receives the formData from the create new pwd form and
 * creates a new password.
 *
 * return: null | mongoDB error
 */
export const createNewPwd = async (values: RegisterFormData) => {
  // Variables
  const { password, recapToken, token } = values;

  // If there's no token, return
  if (!recapToken || !token) {
    return {
      error: "Token not valid",
    };
  }

  const { valid, userId } = await validateResetToken(token);
  if (!valid) return { error: "Invalid or expired token" };

  // Verify Token and receive response
  const captchaData = await verifyCaptchaToken(recapToken);

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

  // if reCaptcha is successful continue with creating the new password
  try {
    // Connect to DB
    await connectDB();
    // Variables
    const userFound = await User.findOne({ _id: userId });
    if (!userFound) {
      return {
        error: "account with this email does not exist!",
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.findByIdAndUpdate(userId, {
      password: hashedPassword,
    });
    await ResetPwdToken.deleteMany({ userId: userId });
  } catch (e) {
    console.log(e);
    throw new Error("Error during registration");
  }
};
