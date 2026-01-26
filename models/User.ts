import {
  ProjectRequestDocument,
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
    role: {
      type: String,
      enum: ["user", "manager", "admin"],
      default: "user",
      index: true,
    },
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
  },
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

// ResetPwdToken schema
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

// Project schema
const ProjectReqSchema = new Schema<ProjectRequestDocument>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
      maxlength: 50,
      trim: true,
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "inProgress", "completed", "rejected"],
      default: "pending",
    },
    completedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true },
);

const User = mongoose.models?.User || model<UserDocument>("User", UserSchema);
const VerificationToken =
  mongoose.models?.VerificationToken ||
  mongoose.model<VerificationTokenDocument>(
    "VerificationToken",
    VerificationTokenSchema,
  );
const ResetPwdToken =
  mongoose.models?.ResetPwdToken ||
  mongoose.model<VerificationTokenDocument>(
    "ResetPwdToken",
    ResetPwdTokenSchema,
  );

const ProjectRequest =
  mongoose.models?.ProjectRequest ||
  mongoose.model<ProjectRequestDocument>("ProjectRequest", ProjectReqSchema);

export { User, VerificationToken, ResetPwdToken, ProjectRequest };
