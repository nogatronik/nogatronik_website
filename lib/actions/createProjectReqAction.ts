"use server";

import { verifyCaptchaToken } from "@/utils/captcha";
import { ProjectRequest as ProjectRequestType } from "../types";
import { User, ProjectRequest } from "@/models/User";
import { connectDB } from "../mongodb";
import { sendProjReqEmail } from "../sendProjReqEmail";

export const createProjectReq = async (
  prevState: ProjectRequestType,
  formData: FormData
) => {
  const formInput: ProjectRequestType["formInput"] = {
    subject: (formData.get("subject") as string) ?? "",
    message: (formData.get("projectDescription") as string) ?? "",
  };
  const recapToken = formData.get("recapToken") as string;
  const userID = formData.get("userID") as string;

  // If there's no token, return
  if (!recapToken) {
    return {
      success: false,
      message: "",
      error: "Captcha Token is missing",
      formInput,
    };
  }

  // Verify Token and receive response
  const captchaData = await verifyCaptchaToken(recapToken);

  // If captchaData is null, return error
  if (!captchaData) {
    return {
      success: false,
      message: "",
      error: "Captcha Failed",
      formInput,
    };
  }

  /*
    If captchaData fails, success is false, action isn't project_request, or score
    is less than .8, return failed project request
  */
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
        : null,
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
      message: formInput.message,
      status: "pending",
    });
    await newProjectReq.save();

    await sendProjReqEmail(user.email, formInput.subject, formInput.message);

    return {
      success: true,
      message: "request sent successfully",
      error: "",
      formInput: {
        subject: formInput.subject,
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
