import Image from "next/image";
import React from "react";
import Link from "next/link";

import { RiLoginBoxFill } from "react-icons/ri";

import ContentLandAnim from "@/components/animations/ContentLandAnim";
import { SignUpForm } from "@/components/forms/SignUpForm";

/**
 *
 * This component displays the Signup Page
 *
 * @returns JSX
 */
type SearchParams = Promise<{ callbackUrl?: string }>;
const SignupPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const sp = await searchParams;
  const callbackUrl = sp.callbackUrl ?? "/";

  return (
    <main className="min-h-[calc(100vh-105px)] w-full max-w-7xl mx-auto p-5 flex flex-col items-center justify-center">
      <ContentLandAnim style="w-full sm:w-[400px] flex flex-col gap-10">
        <div className="flex items-end justify-between">
          <h1 className="text-secondary">Sign-up</h1>
          <Image
            src={"/helpers/signup.svg"}
            alt="login screen"
            width={200}
            height={200}
            priority
            quality={100}
            className="w-[200px] h-auto"
          />
        </div>

        <SignUpForm />

        <hr className="border-t-2 border-secondary/50" />

        <div className="flex items-center gap-2 mx-auto">
          <small>Already have an account</small>
          <Link href={`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`}>
            <button className="button">
              <RiLoginBoxFill className="icon" />
              <small>login</small>
            </button>
          </Link>
        </div>
      </ContentLandAnim>
    </main>
  );
};

export default SignupPage;
