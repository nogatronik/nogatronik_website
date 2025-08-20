import ContentLandAnim from "@/components/animations/ContentLandAnim";
import ResetPwdForm from "@/components/forms/ResetPwdForm";
import Image from "next/image";
import React from "react";

/**
 *
 * This component displays the Forgot Page
 *
 * @returns JSX
 */
const page = () => {
  return (
    <main className="min-h-[calc(100vh-105px)] w-full max-w-7xl mx-auto p-5 flex flex-col items-center justify-center">
      <ContentLandAnim style="w-full sm:w-[400px] flex flex-col gap-10">
        <div className="flex items-end justify-between">
          <h1 className="text-secondary">Reset Password</h1>
          <Image
            src={"/helpers/email_reset_pwd.svg"}
            alt="email to reset password"
            width={200}
            height={200}
            priority
            quality={100}
            className="w-[200px] h-auto"
          />
        </div>
        <small className="text-center">
          If there is an account linked to this email, we&apos;ll send you a
          link to reset your password.
        </small>
        <ResetPwdForm />
      </ContentLandAnim>
    </main>
  );
};

export default page;
