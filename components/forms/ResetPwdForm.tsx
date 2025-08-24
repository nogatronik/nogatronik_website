"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { getCaptchaToken } from "@/utils/captcha";
import { sendResetPwdEmail } from "@/lib/actions/resetPwdAction";

import { MdEmail } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { LuOctagonAlert } from "react-icons/lu";

const ResetPwdForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [success, setSuccess] = useState("");

  const handleResetPwd = async (formData: FormData) => {
    setIsPending(true);
    const token = await getCaptchaToken();

    const r = await sendResetPwdEmail({
      email: formData.get("email") as string,
      token,
    });
    if (r?.error) {
      setError(r.error);
      return;
    } else {
      setIsPending(false);
      setSuccess("Please Verify email and login");
      setTimeout(() => {
        router.push("/login");
      }, 4500);
    }
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
      {isPending ? (
        <small>pending...</small>
      ) : (
        <button className="button">
          <RiSendPlaneFill className="icon" />
          <small>send</small>
        </button>
      )}
      {success && (
        <div className="flex items-center gap-2 mx-auto border-2 border-onFailure p-2 rounded-md">
          <LuOctagonAlert className="icon text-onFailure" />
          <small className="text-onFailure">{success}</small>
        </div>
      )}
      {error && (
        <div className="flex items-center gap-2 mx-auto p-2 border-2 border-primary rounded-md">
          <LuOctagonAlert className="icon text-secondary" />
          <small className="text-secondary">{error}</small>
        </div>
      )}
    </form>
  );
};

export default ResetPwdForm;
