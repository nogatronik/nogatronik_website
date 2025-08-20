"use client";

import React from "react";
import { getCaptchaToken } from "@/utils/captcha";

import { MdEmail } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { sendResetPwdEmail } from "@/lib/actions/resetPwdAction";

const ResetPwdForm = () => {
  const handleResetPwd = async (formData: FormData) => {
    const token = await getCaptchaToken();

    const r = await sendResetPwdEmail({
      email: formData.get("email") as string,
      token,
    });
    console.log(r);
  };

  return (
    <form action={handleResetPwd} className="flex flex-col gap-5 items-center">
      <div className="flex flex-col gap-2 w-full md:w-3/4">
        <label htmlFor="email" className="flex items-center gap-2">
          <MdEmail />
          <small>Email:</small>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@email.com"
          required
        />
      </div>
      <button className="button">
        <RiSendPlaneFill className="icon" />
        <small>send</small>
      </button>
    </form>
  );
};

export default ResetPwdForm;
