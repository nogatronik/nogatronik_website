import Image from "next/image";
import React from "react";

import { validateResetToken } from "@/lib/actions/validateResetTokenAction";

import ContentLandAnim from "@/components/animations/ContentLandAnim";
import Link from "next/link";
import CreateNewPwdForm from "@/components/forms/CreateNewPwdForm";

interface SearchParams {
  searchParams?: {
    token?: string;
  };
}

const ResetPwdPage = async ({ searchParams }: SearchParams) => {
  const token = searchParams?.token;

  const { valid } = await validateResetToken(token);

  return (
    <main className="min-h-[calc(100vh-105px)] w-full max-w-7xl mx-auto p-5 flex flex-col items-center justify-center">
      <ContentLandAnim style="w-full sm:w-[400px] flex flex-col gap-10">
        <div className="flex items-end justify-between">
          <h1 className="text-secondary">Reset Password</h1>
          <Image
            src={"/helpers/enter_pwd.svg"}
            alt="email to reset password"
            width={200}
            height={200}
            priority
            quality={100}
            className="w-[200px] h-auto"
          />
        </div>
        {valid ? (
          <CreateNewPwdForm token={token} />
        ) : (
          <div className="flex flex-col items-center gap-5">
            <p>token absent or invalid</p>
            <Link href={"/login/forgot-password"} className="button">
              <small>try again</small>
            </Link>
          </div>
        )}
      </ContentLandAnim>
    </main>
  );
};

export default ResetPwdPage;
