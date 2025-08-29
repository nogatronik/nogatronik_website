import mongoose, { Document } from "mongoose";
import { Session } from "next-auth";
import { IconType } from "react-icons";

export interface CustomSession extends Session {
  user: {
    email: string;
    name?: string;
    image?: string;
  };
  userID: string;
  isOAuth: boolean;
  provider: string;
}

export interface SocialLink {
  icon: IconType;
  text: string;
  href: string;
  disabled: boolean;
}

export interface NavLink {
  icon: IconType;
  text: string;
  href: string;
}

export interface ShoppingSidePanelLinks {
  component: React.ComponentType<{ userID: string }>;
  icon: IconType;
  text: string;
  auth: boolean;
}

export interface DashboardNavLinks {
  type: string;
  text: string;
  icon: IconType;
  href: string | null;
}

export interface EngSubNav {
  href: string;
  image: string;
  description: string;
  text: string;
}

export interface ObjectivesGoal {
  title: string;
  text: string;
}

export interface ValueGoal {
  title: string;
  text: string;
}

export interface WebsiteFeatureSummary {
  title: string;
  explanation: string;
  image: string;
  link: string;
}

export interface RepairStep {
  image: IconType;
  description: string;
}

export type CaptchaData =
  | {
      success: true;
      challenge_ts: string;
      hostname: string;
      score: number;
      action: string;
    }
  | {
      success: false;
      "error-codes": string[];
    };

export interface UserDocument {
  _id: string;
  email: string;
  password: string;
  name: string;
  lName: string;
  image: string;
  isOAuth: boolean;
  dateOfBirth: Date;
  phoneNumber: string;
  emailVerified: boolean;
}

export interface VerificationTokenDocument extends Document {
  userId: mongoose.Types.ObjectId;
  token: string;
  expires: Date;
}

export interface ResetPwdTokenDocument extends Document {
  userId: mongoose.Types.ObjectId;
  token: string;
  expires: Date;
}

export interface HomeAboutLink {
  component: React.ComponentType;
  key: string;
}

export interface UpdateUserInfo {
  success: boolean;
  message: string;
  user: {
    name: string;
    lName: string;
    phoneNumber: string;
    dateOfBirth: string;
  } | null;
}

export interface UpdateUserAccInfo {
  success: boolean;
  message: string;
  user: {
    email: string;
    password: string;
  } | null;
}

export interface RepairRequest {
  success: boolean;
  message: string;
  error: string;
  formInput: {
    uploadImage: FileList | null;
    uploadVideo: FileList | null;
    brand: string;
    model: string;
    modelNumber: string;
    issueTitle: string;
    issueDate: Date | null;
    previousWork: string;
    issueOcccurance: string;
    warranty: string;
    prefferedDelivery: string;
    preferredContactMethod: string;
    issueDescription: string;
  };
}
