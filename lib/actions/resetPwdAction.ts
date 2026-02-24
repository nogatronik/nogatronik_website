"use server";

import nodemailer from "nodemailer";
import { verifyCaptchaToken } from "@/utils/captcha";
import { connectDB } from "../mongodb";
import { v4 as uuidv4 } from "uuid";

import { ResetPwdToken, User } from "@/models/User";

const getResetPwdEmailHTML = async ({
  name,
  resetPwdUrl,
}: {
  name: string;
  resetPwdUrl: string;
}) => {
  try {
    const res = await fetch(
      `${process.env.VERIFICATION_URL_DOMAIN}/emailTemplates/forgot_password.html`,
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch template: ${res.status}`);
    }

    let html = await res.text();

    // Replace placeholders from html file
    html = html
      .replace(/{{name}}/g, name)
      .replace(/{{verificationUrl}}/g, resetPwdUrl);

    return html;
  } catch (e) {
    console.log("getResetPwdEmailHTML", e);
  }
};

const sendEmail = async (name: string, email: string, token: string) => {
  try {
    const domain = process.env.VERIFICATION_URL_DOMAIN;
    const resetPwdUrl = `${domain}reset-pwd?token=${token}`;
    const transporter = nodemailer.createTransport({
      host: "smtp.mail.us-east-1.awsapps.com",
      port: 465,
      secure: true,
      // tls: {
      //   rejectUnauthorized: false,
      // },
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Gets the verification email and forms object to sent via sendMail
    const html = await getResetPwdEmailHTML({ name, resetPwdUrl });
    const mailOptions = {
      from: '"Nogatronik" <solutions@nogatronik.com>',
      to: email,
      subject: "Reset Password",
      html,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("Emaoil sent successfully to:", name, email);
  } catch (e) {
    console.log("sendEmail in ResetPwd", e);
  }
};

interface ResetPwdFormData {
  email: string;
  token: string | null;
}

export const sendResetPwdEmail = async (values: ResetPwdFormData) => {
  const { email, token } = values;

  // If there's no token, return
  if (!token) {
    return {
      error: "Token not valid",
    };
  }

  // Verify Token and receive response
  const captchaData = await verifyCaptchaToken(token);

  // If captchaData is null, return error
  if (!captchaData) {
    return {
      error: "Captcha Failed",
    };
  }

  /* 
  If captchaData fails, success is false, action isn't reset_password, or score
  is less than .8, return failed registration
  */
  if (
    !captchaData.success ||
    captchaData.action !== "reset_password" ||
    captchaData.score < 0.8
  ) {
    return {
      error: !captchaData.success
        ? captchaData["error-codes"].toString()
        : null,
    };
  }

  try {
    // Connect to DB
    await connectDB();

    // Variables (creates user)
    const userFound = await User.findOne({ email });
    if (userFound) {
      const token = uuidv4();
      const userToken = new ResetPwdToken({
        token,
        userId: userFound._id,
        expires: new Date(Date.now() + 1000 * 60 * 60), // Token expires in 1 hour
      });
      await userToken.save();

      // Send reset password email
      await sendEmail(userFound.name, email, token);
    }
  } catch (e) {
    console.log(e);
    throw new Error("Error during sending reset password email");
  }
};
