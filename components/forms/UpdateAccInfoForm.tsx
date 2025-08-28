"use client";

import React, { startTransition, useActionState } from "react";

import { LuOctagonAlert } from "react-icons/lu";

import { UpdateUserAccInfo } from "@/lib/types";
import { updateUserAccInfoAction } from "@/lib/actions/updateUserAccInfoAction";
import { getCaptchaToken } from "@/utils/captcha";
import { toast } from "sonner";

interface Props {
  data: {
    userID: string;
    email: string;
    password: string;
    image: string;
    isOAuth: boolean;
    provider: string;
  };
}

const initialState: UpdateUserAccInfo = {
  success: true,
  message: "",
  user: null,
};

const UpdateAccInfoForm = ({ data }: Props) => {
  const [state, formAction, isPending] = useActionState<
    UpdateUserAccInfo,
    FormData
  >(updateUserAccInfoAction, initialState);

  const handleSubmit = async (formData: FormData) => {
    const token = await getCaptchaToken("update_account_info");
    formData.append("token", token || "");

    startTransition(() => {
      formAction(formData);
      if (state.success) toast.success("Account info updated successfully");
      else toast.error(state.message);
    });
  };

  return (
    <>
      <form action={handleSubmit} className="flex flex-col gap-5 w-full">
        <input type="hidden" name="userID" value={data.userID} />

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="flex items-center gap-2">
            <small>Email:</small>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={data.email}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="flex items-center gap-2">
            <small>Password:</small>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          />
        </div>

        {!state?.success && (
          <div className="flex items-center gap-2 mx-auto p-2 border-2 border-primary rounded-md">
            <LuOctagonAlert className="icon text-secondary" />
            <small className="text-secondary">{state?.message}</small>
          </div>
        )}
        {isPending ? (
          <small>pending...</small>
        ) : (
          <button className="col-span-2 button md:w-1/4 mt-2 mx-auto">
            <small>Update</small>
          </button>
        )}
      </form>
    </>
  );
};

export default UpdateAccInfoForm;
