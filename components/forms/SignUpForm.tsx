"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { MdEmail } from "react-icons/md";
import { RiUserAddFill, RiUserFill } from "react-icons/ri";
import { FaUnlockAlt } from "react-icons/fa";

import { registerSchema } from "@/lib/schemas/registerSchema";
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
  const [inputError, setInputError] = useState<Record<string, string[]>>({});
  const [isPending, setIsPending] = useState(false);

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

    const zodResult = registerSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
    if (!zodResult.success) {
      const errors: Record<string, string[]> = {};
      zodResult.error.issues.forEach((issue) => {
        const field = String(issue.path[0]);
        if (!field) return;
        if (!errors[field]) errors[field] = [];
        errors[field].push(issue.message);
      });
      setInputError(errors);
      setIsPending(false);
      return;
    }

    const token = await getCaptchaToken("register");
    formData.append("token", token || "");

    // calling server action, register, to save new user in the database
    const result = await register(formData);

    // Handling error or successful return. Error-display error, Success: redirect user to login page
    if (!result.success) {
      setIsPending(false);
      if (result.inputError) setInputError(result.inputError);
      toast.error(result.error);
      return;
    } else {
      setIsPending(false);
      toast.success("Please verify your email and login");
      router.push("/login");
    }
  };

  return (
    <>
      <form
        action={handleSubmit}
        className="grid grid-cols-2 gap-5 items-center"
      >
        <div className="flex flex-col gap-2 col-span-2 md:col-auto w-full">
          <label htmlFor="fName" className="flex items-center gap-2">
            <RiUserFill className="icon" />
            <small>First Name:</small>
          </label>
          <input
            id="fName"
            name="fName"
            type="text"
            placeholder="first name"
            required
            onChange={() => setInputError({ ...inputError, fName: [] })}
          />
          {inputError.fName && (
            <small className="text-red-400">{inputError.fName[0]}</small>
          )}
        </div>

        <div className="flex flex-col gap-2 col-span-2 md:col-auto w-full">
          <label htmlFor="lName" className="flex items-center gap-2">
            <RiUserFill className="icon" />
            <small>Last Name:</small>
          </label>
          <input
            id="lName"
            name="lName"
            type="text"
            placeholder="last name"
            required
            onChange={() => setInputError({ ...inputError, lName: [] })}
          />
          {inputError.lName && (
            <small className="text-red-400">{inputError.lName[0]}</small>
          )}
        </div>

        <div className="flex flex-col col-span-2 gap-2 w-full">
          <label htmlFor="email" className="flex items-center gap-2">
            <MdEmail className="icon" />
            <small>Email:</small>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="example@email.com"
            required
            onChange={() => setInputError({ ...inputError, email: [] })}
          />
          {inputError.email && (
            <small className="text-red-400">{inputError.email[0]}</small>
          )}
        </div>

        <div className="flex flex-col col-span-2 gap-2 w-full">
          <label htmlFor="pwd" className="flex items-center gap-2">
            <FaUnlockAlt className="icon" />
            <small>Password:</small>
          </label>
          <ul className="list-disc list-outside ml-5">
            <li>
              <small>minimum of 12 characters</small>
            </li>
            <li>
              <small>
                Include at least 3 of the following: uppercase letters,
                lowercase letters, numbers, or symbols
              </small>
            </li>
          </ul>
          <input
            type="password"
            id="pwd"
            name="pwd"
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
            required
            onChange={() => setInputError({ ...inputError, pwd: [] })}
          />
          {inputError.pwd &&
            inputError.pwd.map((err, i) => (
              <small key={i} className="text-red-400">
                {err}
              </small>
            ))}
        </div>
        {isPending ? (
          <small>pending...</small>
        ) : (
          <button className="button mx-auto col-span-2">
            <RiUserAddFill className="icon" />
            <small>Sign up</small>
          </button>
        )}
      </form>
    </>
  );
};
