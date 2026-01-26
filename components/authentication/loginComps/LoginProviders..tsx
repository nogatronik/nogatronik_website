"use client";

import React from "react";
import { signIn } from "@/node_modules/next-auth/react";

import { FaApple, FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";

/**
 *
 * This component displays the providers that are used to signin a user
 *
 * @returns JSX
 */
const LoginProviders = () => {
  return (
    <div className="relative flex flex-col items-center gap-5">
      <small>or sign-in using</small>
      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            signIn("google", {
              redirect: true,
              callbackUrl: "/",
            });
          }}
          className="group button bg-transparent hover:bg-accent"
        >
          <FaGoogle className="icon " />
        </button>
        <button
          className="group button bg-transparent hover:bg-accent disabled:opacity-50"
          disabled
        >
          <FaFacebookF className="icon " />
        </button>
        <button
          className="group button bg-transparent hover:bg-accent disabled:opacity-50"
          disabled
        >
          <FaApple className="icon " />
        </button>
        <button
          className="group button bg-transparent hover:bg-accent disabled:opacity-50"
          disabled
        >
          <FaInstagram className="icon " />
        </button>
      </div>
    </div>
  );
};

export default LoginProviders;
