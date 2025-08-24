"use client";

import React, { useState } from "react";
import { getCaptchaToken } from "@/utils/captcha";
import { useRouter } from "next/navigation";

import { FaPlus, FaUnlockAlt } from "react-icons/fa";
import { LuOctagonAlert } from "react-icons/lu";
import { createNewPwd } from "@/lib/actions/createNewPwdAction";

interface Props {
  token: string | undefined;
}

const CreateNewPwdForm = ({ token }: Props) => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [success, setSuccess] = useState("");

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
    const recapToken = await getCaptchaToken();

    // calling createNewPwd action, creates a new password for the user
    const r = await createNewPwd({
      password: formData.get("pwd") as string,
      token,
      recapToken,
    });

    // Handling error or successful return. Error-display error, Success: redirect user to login page
    if (r?.error) {
      setError(r.error);
      return;
    } else {
      setIsPending(false);
      setSuccess("Password successfully changed");
      setTimeout(() => {
        router.push("/login");
      }, 4500);
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
            onChange={() => setError("")}
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
            onChange={() => setError("")}
          />
        </div>
        {isPending ? (
                  <small>pending...</small>
                ) : (
                  <button className="button mx-auto">
          <FaPlus className="icon" />
          <small>create new password</small>
        </button>
                )}
        
      </form>
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
    </>
  );
};

export default CreateNewPwdForm;
