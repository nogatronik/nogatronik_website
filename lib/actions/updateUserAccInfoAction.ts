"use server";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";
import { revalidateTag } from "next/cache";
import { UpdateUserAccInfo } from "../types";
import bcrypt from "bcryptjs";
import { verifyCaptchaToken } from "@/utils/captcha";

/**
 *
 * @param userID: string
 * @param email: string
 * @param password: string
 * @param token: string || null
 *
 * This server action receives the formData from the update User Account Info form and creates a user
 * in the database. Bcrypt is used to hash the password before storing it.
 *
 * return: null | mongoDB error
 */
export const updateUserAccInfoAction = async (
  prevState: UpdateUserAccInfo,
  formData: FormData
): Promise<UpdateUserAccInfo> => {
  const token = formData.get("token") as string;
  if (!token) {
    return {
      success: false,
      message: "captcha token missing",
      user: null,
    };
  }
  // Verify Token and receive response
  const captchaData = await verifyCaptchaToken(token);

  // If captchaData is null, return error
  if (!captchaData) {
    return {
      success: false,
      message: "captcha failed",
      user: null,
    };
  }

  /* 
    If captchaData fails, success is false, action isn't update_account_info, or score
    is less than .5, return failed registration
    */
  if (
    !captchaData.success ||
    captchaData.action !== "update_account_info" ||
    captchaData.score < 0.8
  ) {
    return {
      success: false,
      message: !captchaData.success
        ? captchaData["error-codes"].toString()
        : "captcha failed",
      user: null,
    };
  }

  // Variables
  const userID = formData.get("userID") as string;

  // Return userID is invalid or missing
  if (!userID) {
    return {
      success: false,
      message: "User ID is required",
      user: null,
    };
  }

  const newState = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  // Check if there are any updates
  type UserFields = "email" | "password";
  const changedFields = Object.entries(newState).filter(([key, value]) => {
    // Ensure key is one of the valid user fields
    if (value === "") return false;
    return value !== prevState.user?.[key as UserFields]; // Type assertion for key
  });
  if (changedFields.length === 0) {
    return prevState;
  }
  try {
    // Connect to DB
    await connectDB();

    // Variables (creates user)
    const user = await User.findOne({ _id: userID });
    if (user) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const updatedFields: Record<string, any> = {};

      if (newState.email) updatedFields.email = newState.email;
      if (newState.password)
        updatedFields.password = await bcrypt.hash(newState.password, 10);

      const updUser = await User.findByIdAndUpdate(
        userID,
        {
          ...updatedFields,
        },
        { new: true }
      );
      const plainUser = updUser.toObject();
      revalidateTag(`user-info-${userID}`);

      return {
        success: true,
        message: "Updated successfully",
        user: {
          email: plainUser.email,
          password: plainUser.password,
        },
      };
    }

    return {
      success: false,
      message: "User not found",
      user: null,
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: "Error updating user",
      user: null,
    };
  }
};
