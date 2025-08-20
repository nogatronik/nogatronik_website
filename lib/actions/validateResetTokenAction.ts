import { ResetPwdToken } from "@/models/User";
import { connectDB } from "../mongodb";

export const validateResetToken = async (token: string | null) => {
  try {
    if (!token) return { valid: false, userId: null };
    // Connect to DB
    await connectDB();

    const record = await ResetPwdToken.findOne({ token });

    if (!record) {
      return { valid: false, userId: null };
    }

    if (record.expires < new Date()) {
      await ResetPwdToken.deleteOne({ _id: record._id });
    }
    return { valid: true, userId: record.userId };
  } catch (e) {
    console.log(e);
    throw new Error("Error during validating reset token");
  }
};
