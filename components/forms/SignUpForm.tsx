"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { LuOctagonAlert } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { RiUserAddFill, RiUserFill } from "react-icons/ri";
import { FaUnlockAlt } from "react-icons/fa";

import { register } from "@/lib/actions/registerAction";
import { getCaptchaToken } from "@/utils/captcha";

/**
 *
 * This form handles a user's signup process
 *
 * @returns - JSX
 */
export const SignUpForm = () => {
  // Variables
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  /**
   *
   * param: formData FormData
   *
   * This is the action of the sign-up form. It will register a user to the database.
   *
   * return: null | redirect to login page
   */
  const handleSubmit = async (formData: FormData) => {
    setIsPending(true);
    const token = await getCaptchaToken();

    // calling server action, register, to save new user in the database
    const r = await register({
      name: formData.get("name") as string,
      lName: formData.get("lName") as string,
      email: formData.get("email") as string,
      password: formData.get("pwd") as string,
      token,
    });

    // Handling error or successful return. Error-display error, Success: redirect user to login page
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
    <>
      <form action={handleSubmit} className="flex flex-col gap-5 items-center">
        <div className="flex flex-col gap-2 w-full md:w-3/4">
          <label htmlFor="name" className="flex items-center gap-2">
            <RiUserFill className="icon" />
            <small>First Name:</small>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="first name"
            onChange={() => setError("")}
            required
          />
        </div>

        <div className="flex flex-col gap-2 w-full md:w-3/4">
          <label htmlFor="lName" className="flex items-center gap-2">
            <RiUserFill className="icon" />
            <small>Last Name:</small>
          </label>
          <input
            id="lName"
            name="lName"
            type="text"
            placeholder="last name"
            onChange={() => setError("")}
            required
          />
        </div>

        <div className="flex flex-col gap-2 w-full md:w-3/4">
          <label htmlFor="email" className="flex items-center gap-2">
            <MdEmail className="icon" />
            <small>Email:</small>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="example@email.com"
            onChange={() => setError("")}
            required
          />
        </div>

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
        {isPending ? (
          <small>pending...</small>
        ) : (
          <button className="button mx-auto">
            <RiUserAddFill className="icon" />
            <small>sign-up</small>
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
        <div className="flex items-center gap-2 mx-auto border-2 border-onFailure p-2 rounded-md">
          <LuOctagonAlert className="icon text-onFailure" />
          <small className="text-onFailure">{error}</small>
        </div>
      )}
    </>
  );
};
