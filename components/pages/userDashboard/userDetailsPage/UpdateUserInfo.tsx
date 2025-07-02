"use client";

import React from "react";

import { RiUserFill } from "react-icons/ri";

import UpdateUserInfoForm from "@/components/forms/UpdateUserInfoForm";
import useScreenWidth from "@/hooks/useScreenWidth";

interface Props {
  data: {
    userID: string;
    name: string;
    lName?: string;
    image?: string;
    dateOfBirth?: Date;
    phoneNumber?: string;
  };
}

const UpdateUserInfo = ({ data }: Props) => {
  const width = useScreenWidth();
  
  return (
    <div
      className={`flex flex-col gap-5 p-5 md:gap-2 border-[1px] border-secondary/50 shadow-sm ${
        width! <= 1024 ? "w-full" : "w-1/2"
      }`}
    >
      <div className="col-span-2 flex gap-2 items-center">
        <RiUserFill className="icon" />
        <h3 className="text-secondary">User Info</h3>
      </div>
      <UpdateUserInfoForm
        data={{
          userID: data.userID,
          name: data.name,
          lName: data.lName,
          dateOfBirth: data.dateOfBirth,
          phoneNumber: data.phoneNumber,
        }}
      />
    </div>
  );
};

export default UpdateUserInfo;
