"use client";

import React, { useState } from "react";
import { getCaptchaToken } from "@/utils/captcha";
import { useRouter } from "next/navigation";

import { FaPlus, FaUnlockAlt } from "react-icons/fa";
import { createNewPwd } from "@/lib/actions/createNewPwdAction";
import { toast } from "sonner";

interface Props {
  token: string | undefined;
}

const CreateNewPwdForm = ({ token }: Props) => {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  /**
   *
   * param: formData FormData
   *
   * This is the action of the create new pwd form. It will create a new pwd.
   *
   * return: null | redirect to login page
   */
  const handleSubmit = async (formData: FormData) => {
    setIsPending(true);
    const recapToken = await getCaptchaToken("create_new_pwd");

    // calling createNewPwd action, creates a new password for the user
    const r = await createNewPwd({
      password: formData.get("pwd") as string,
      token,
      recapToken,
    });

    // Handling error or successful return. Error-display error, Success: redirect user to login page
    if (r?.error) {
      setIsPending(false);
      toast.error(r.error);
      return;
    } else {
      setIsPending(false);
      toast.success("Password successfully changed");
      router.push("/login");
    }
  };

  return (
    <>
      <form action={handleSubmit} className="flex flex-col gap-5 items-center">
        <div className="flex flex-col gap-2 w-full md:w-3/4">
          <label htmlFor="pwd" className="flex items-center gap-2">
            <FaUnlockAlt className="icon" />
            <small>Password:</small>
          </label>
          <input
            type="password"
            id="pwd"
            name="pwd"
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
            required
          />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-3/4">
          <label htmlFor="pwd" className="flex items-center gap-2">
            <FaUnlockAlt className="icon" />
            <small>Confirm Password:</small>
          </label>
          <input
            type="password"
            id="confirm-pwd"
            name="confirm-pwd"
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
            required
          />
        </div>
        {isPending ? (
          <small>pending...</small>
        ) : (
          <button className="button mx-auto">
            <FaPlus className="icon" />
            <small>Create new password</small>
          </button>
        )}
      </form>
    </>
  );
};

export default CreateNewPwdForm;
