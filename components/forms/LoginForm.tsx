"use client";

import { signIn } from "@/node_modules/next-auth/react";
import { redirect, useSearchParams } from "next/navigation";
import { useState } from "react";

import { RiLoginBoxFill } from "react-icons/ri";
import { LuOctagonAlert } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { FaUnlockAlt } from "react-icons/fa";
import Link from "next/link";
import { toast } from "sonner";

/**
 *
 * This form handles a user's login process
 *
 * @returns - JSX
 */
const LoginForm = () => {
  // Variables
  const searchParams = useSearchParams();
  const verified = searchParams.get("verified");
  const errorCallback = searchParams.get("error");
  // UseState
  const [isPending, setIsPending] = useState(false);
  /**
   *
   * param: event FormEvent
   *
   * This is the onSubmit handle function that will receive the data from the registration form
   * and call nextauth's signIn. Depending on the outcome, it will:
   *    1. Be successful and redirect to dashboard
   *    2. Have a form error or internal server error
   */
  const handleSignIn = async (formData: FormData) => {
    setIsPending(true);

    // Receiving data and calling signIn function
    const res = await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("pwd") as string,
      redirect: false,
    });

    // Handling possible errors received from signIn
    if (res?.error) {
      if (res.status.toString().startsWith("4"))
        toast.error("wrong email or password");
      if (res.status.toString().startsWith("5"))
        toast.error("there was a problem with the server, try again");
    }
    if (res?.ok) {
      setIsPending(false);
      redirect("/");
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignIn(new FormData(e.currentTarget));
        }}
        className="flex flex-col gap-5 items-center"
      >
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
        <div className="flex flex-col gap-2 w-full md:w-3/4">
          <label htmlFor="pwd" className="flex items-center gap-2">
            <FaUnlockAlt />
            <small>Password:</small>
          </label>
          <input
            type="password"
            id="pwd"
            name="pwd"
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
            required
          />
          <Link
            href={"/login/forgot-password"}
            className="flex justify-center group w-fit mx-auto"
          >
            <small className="link-child anim-transition">
              forgot password
            </small>
          </Link>
        </div>
        {isPending ? (
          <small>pending...</small>
        ) : (
          <button className="button">
            <RiLoginBoxFill className="icon" />
            <small>Login</small>
          </button>
        )}
      </form>
      {verified === "1" && (
        <div className="flex items-center gap-2 mx-auto p-2 border-2 border-secondary rounded-md">
          <LuOctagonAlert className="icon text-secondary" />
          <small className="text-secondary text-center">
            Your email has been successfully verified. You can now log in.
          </small>
        </div>
      )}
      {errorCallback && (
        <div className="flex items-center gap-2 mx-auto p-2 border-2 border-primary rounded-md">
          <LuOctagonAlert className="icon text-secondary" />
          <small className="text-secondary">
            An account with this email already exists. Please sign in using your
            email and password.
          </small>
        </div>
      )}
    </>
  );
};

export default LoginForm;
