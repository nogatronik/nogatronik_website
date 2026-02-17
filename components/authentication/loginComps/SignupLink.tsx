import Link from "next/link";
import React from "react";
import { RiUserAddFill } from "react-icons/ri";

/**
 *
 * This component displays the link to the registration page
 *
 * @returns JSX
 */
const SignupLink = ({ callbackUrl }: { callbackUrl: string }) => {
  return (
    <div className="flex items-center gap-2 mx-auto">
      <small>Don&apos;t have an account, create one</small>
      <Link href={`/signup?callbackUrl=${encodeURIComponent(callbackUrl)}`}>
        <button className="button">
          <RiUserAddFill className="icon" />
          <small>register</small>
        </button>
      </Link>
    </div>
  );
};

export default SignupLink;
