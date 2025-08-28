"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { getCaptchaToken } from "@/utils/captcha";
import { sendResetPwdEmail } from "@/lib/actions/resetPwdAction";

import { MdEmail } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { toast } from "sonner";

const ResetPwdForm = () => {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const handleResetPwd = async (formData: FormData) => {
    setIsPending(true);
    const token = await getCaptchaToken("reset_password");

    const r = await sendResetPwdEmail({
      email: formData.get("email") as string,
      token,
    });
    if (r?.error) {
      setIsPending(false);
      toast.error(r.error);
      return;
    } else {
      setIsPending(false);
      toast.success(
        "If an account with that email exists, you'll receive a link to reset your password"
      );
      router.push("/login");
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
          <small>Send</small>
        </button>
      )}
    </form>
  );
};

export default ResetPwdForm;
