"use client";

import { signIn } from "@/node_modules/next-auth/react";
import { redirect, useParams } from "next/navigation";
import { useState, FormEvent } from "react";

import { RiLoginBoxFill } from "react-icons/ri";
import { LuOctagonAlert } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { FaUnlockAlt } from "react-icons/fa";

/**
 *
 * This form handles a user's login process
 *
 * @returns - JSX
 */
const LoginForm = () => {
  // Variables
  const searchParams = useParams();
  const verified = searchParams.verified;
  // UseState
  const [error, setError] = useState("");
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
  const handleSignIn = async (event: FormEvent<HTMLFormElement>) => {
    // setting up form and isPending
    event.preventDefault();
    setIsPending(true);

    // Receiving data and calling signIn function
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("pwd"),
      redirect: false,
    });

    // Handling possible errors received from signIn
    if (res?.error) {
      if (res.status.toString().startsWith("4"))
        setError("wrong email or password");
      if (res.status.toString().startsWith("5"))
        setError("there was a problem with the server, try again");
    }
    if (res?.ok) {
      redirect("/");
    }

    // After completition, set pending to false
    setIsPending(false);
  };

  return (
    <>
      <form
        onSubmit={handleSignIn}
        className="flex flex-col gap-5 items-center"
      >
        <div className="flex flex-col gap-2 w-full md:w-3/4">
          <label htmlFor="email" className="flex items-center gap-2">
            <MdEmail />
            <small>Email:</small>
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="example@email.com"
            onChange={() => setError("")}
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
            onChange={() => setError("")}
            required
          />
        </div>
        {isPending ? (
          <small>pending...</small>
        ) : (
          <button className="button">
            <RiLoginBoxFill className="icon" />
            <small>login</small>
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
      {error && (
        <div className="flex items-center gap-2 mx-auto p-2 border-2 border-primary rounded-md">
          <LuOctagonAlert className="icon text-secondary" />
          <small className="text-secondary">{error}</small>
        </div>
      )}
    </>
  );
};

export default LoginForm;
