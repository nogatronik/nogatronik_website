"use server";

import { verifyCaptchaToken } from "@/utils/captcha";
import { User, ProjectRequest } from "@/models/User";
import { connectDB } from "@/lib/mongodb";
import { sendProjReqEmail } from "@/lib/sendProjReqEmail";
import { revalidateTag } from "next/cache";

import type { ProjectRequestActionState } from "@/lib/types";

export const createProjectReq = async (
  prevState: ProjectRequestActionState,
  formData: FormData,
): Promise<ProjectRequestActionState> => {
  const formInput: ProjectRequestActionState["formInput"] = {
    subject: ((formData.get("subject") as string) ?? "").trim(),
    subtitle: ((formData.get("subtitle") as string) ?? "").trim().slice(0, 50),
    message: ((formData.get("projectDescription") as string) ?? "").trim(),
  };

  const recapToken = (formData.get("recapToken") as string) ?? "";
  const userID = (formData.get("userID") as string) ?? "";

  // Basic server-side validation
  if (!formInput.subject || !formInput.subtitle || !formInput.message) {
    return {
      success: false,
      message: "",
      error: "Please fill out all required fields.",
      formInput,
    };
  }

  if (!recapToken) {
    return {
      success: false,
      message: "",
      error: "Captcha Token is missing",
      formInput,
    };
  }

  const captchaData = await verifyCaptchaToken(recapToken);

  if (!captchaData) {
    return {
      success: false,
      message: "",
      error: "Captcha Failed",
      formInput,
    };
  }

  if (
    !captchaData.success ||
    captchaData.action !== "project_request" ||
    captchaData.score < 0.8
  ) {
    return {
      success: false,
      message: "",
      error: !captchaData.success
        ? captchaData["error-codes"].toString()
        : "Captcha validation failed",
      formInput,
    };
  }

  try {
    await connectDB();

    const user = await User.findOne({ _id: userID });
    if (!user) {
      return {
        success: false,
        message: "",
        error: "User not found",
        formInput,
      };
    }
    const newProjectReq = new ProjectRequest({
      userId: user._id,
      subject: formInput.subject,
      subtitle: formInput.subtitle,
      message: formInput.message,
      status: "pending",
    });

    await newProjectReq.save();

    await sendProjReqEmail(
      user.email,
      formInput.subject,
      formInput.subtitle,
      formInput.message,
    );

    revalidateTag(`user-project-requests-${user._id}`);

    return {
      success: true,
      message: "request sent successfully",
      error: null,
      formInput: {
        subject: formInput.subject,
        subtitle: "",
        message: "",
      },
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: "",
      error: "Error sending request",
      formInput,
    };
  }
};
