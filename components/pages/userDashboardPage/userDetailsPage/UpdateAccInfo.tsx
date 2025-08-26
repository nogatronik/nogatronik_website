"use client";

import React from "react";

import { HiMiniIdentification } from "react-icons/hi2";

import UpdateAccInfoForm from "@/components/forms/UpdateAccInfoForm";
import useScreenWidth from "@/hooks/useScreenWidth";

interface Props {
  data: {
    userID: string;
    email: string;
    password: string;
    image: string;
    isOAuth: boolean;
    provider: string;
  };
}

const UpdateAccInfo = ({ data }: Props) => {
  const width = useScreenWidth();

  return (
    <div
      className={`flex flex-col gap-5 p-5 md:gap-2 border-[1px] border-secondary/50 shadow-sm ${
        width! <= 1024 ? "w-full" : "w-1/2"
      }`}
    >
      <div className="col-span-2 flex gap-2 items-center">
        <HiMiniIdentification className="icon" />
        <h3 className="text-secondary">Account Info</h3>
      </div>

      {data.isOAuth ? (
        <div className="flex flex-col items-center gap-2">
          <h3>Opps, looks like {data.provider} is in charge here!</h3>
          <small>
            Email and password changes can only be made through your{" "}
            {data.provider} account.
          </small>
        </div>
      ) : (
        <UpdateAccInfoForm
          data={{
            userID: data.userID,
            email: data.email,
            password: data.password,
            image: data.image,
            isOAuth: data!.isOAuth,
            provider: data!.provider,
          }}
        />
      )}
    </div>
  );
};

export default UpdateAccInfo;
