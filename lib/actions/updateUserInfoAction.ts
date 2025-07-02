"use server";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";
import { revalidateTag } from "next/cache";
import { UpdateUserInfo } from "../types";

/**
 *
 * @param userID: string
 * @param name: string
 * @param lName: string
 * @param phoneNumber: string
 * @param dateOfBirth: string | null
 *
 * This server action receives the formData from the update User Info form and creates a user
 * in the database. Bcrypt is used to hash the password before storing it.
 *
 * return: null | mongoDB error
 */
export const updateUserInfo = async (
  prevState: UpdateUserInfo,
  formData: FormData
): Promise<UpdateUserInfo> => {
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
    name: formData.get("name") as string,
    lName: formData.get("lName") as string,
    phoneNumber: formData.get("phoneNum") as string,
    dateOfBirth: formData.get("dateBirth") as string,
  };

  // Check if there are any updates
  type UserFields = "name" | "lName" | "phoneNumber" | "dateOfBirth";
  const changedFields = Object.entries(newState).filter(([key, value]) => {
    if (value === "") return false;
    return value !== prevState.user?.[key as UserFields];
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

      if (newState.name) updatedFields.name = newState.name;
      if (newState.lName) updatedFields.lName = newState.lName;
      if (newState.phoneNumber)
        updatedFields.phoneNumber = newState.phoneNumber;
      if (
        newState.dateOfBirth &&
        newState.dateOfBirth !== user?.dateOfBirth?.toISOString().split("T")[0]
      )
        updatedFields.dateOfBirth = newState.dateOfBirth;

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
          name: plainUser.name,
          lName: plainUser.lName,
          phoneNumber: plainUser.phoneNumber,
          dateOfBirth: plainUser.dateOfBirth.toISOString().split("T")[0],
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
