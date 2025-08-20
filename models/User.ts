import {
  ResetPwdTokenDocument,
  UserDocument,
  VerificationTokenDocument,
} from "@/lib/types";
import mongoose, { Schema, model } from "mongoose";

// User schema
const UserSchema = new Schema<UserDocument>(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "credentials - Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    password: {
      type: String,
      select: false,
      required: function () {
        return !this.isOAuth;
      },
    },
    isOAuth: { type: Boolean, default: false },
    name: {
      type: String,
      required: [true, "credentials - Name is required"],
    },
    lName: {
      type: String,
    },
    image: {
      type: String,
      default: null,
    },
    emailVerified: { type: Boolean, default: false },
    dateOfBirth: {
      type: Date,
      default: null,
    },
    phoneNumber: {
      type: String,
      unique: true,
      sparse: true,
      match: [/^\+?[1-9]\d{7,14}$/, "phone number invalid"],
    },
  },
  {
    timestamps: true,
  }
);

// VerificationToken schema
const VerificationTokenSchema = new Schema<VerificationTokenDocument>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  token: {
    type: String,
    required: true,
    unique: true,
  },
  expires: {
    type: Date,
    required: true,
    index: { expires: 0 },
  },
});

const ResetPwdTokenSchema = new Schema<ResetPwdTokenDocument>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  token: {
    type: String,
    required: true,
    unique: true,
  },
  expires: {
    type: Date,
    required: true,
    index: { expires: 0 },
  },
});

const User = mongoose.models?.User || model<UserDocument>("User", UserSchema);
const VerificationToken =
  mongoose.models?.VerificationToken ||
  mongoose.model<VerificationTokenDocument>(
    "VerificationToken",
    VerificationTokenSchema
  );
const ResetPwdToken =
  mongoose.models?.ResetPwdToken ||
  mongoose.model<VerificationTokenDocument>(
    "ResetPwdToken",
    ResetPwdTokenSchema
  );

export { User, VerificationToken, ResetPwdToken };
