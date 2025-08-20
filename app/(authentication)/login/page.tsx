import Image from "next/image";
import React from "react";

import ContentLandAnim from "@/components/animations/ContentLandAnim";
import LoginProviders from "@/components/authentication/loginComps/LoginProviders.";
import SignupLink from "@/components/authentication/loginComps/SignupLink";
import LoginForm from "@/components/forms/LoginForm";

/**
 *
 * This component displays the Login Page
 *
 * @returns JSX
 */
const LoginPage = async () => {
  return (
    <main className="min-h-[calc(100vh-105px)] w-full max-w-7xl mx-auto p-5 flex flex-col items-center justify-center">
      <ContentLandAnim style="w-full sm:w-[400px] flex flex-col gap-10">
        <div className="flex items-end justify-between">
          <h1 className="text-secondary">Login</h1>
          <Image
            src={"/helpers/login.svg"}
            alt="login screen"
            width={200}
            height={200}
            priority
            quality={100}
            className="w-[200px] h-auto"
          />
        </div>

        <LoginForm />
        <hr className="border-t-2 border-secondary/50" />

        <LoginProviders />
        <SignupLink />
      </ContentLandAnim>
    </main>
  );
};

export default LoginPage;
