"use client";

import React, { useActionState, useState } from "react";

import { LuOctagonAlert } from "react-icons/lu";

import { updateUserInfo } from "@/lib/actions/updateUserInfoAction";
import { UpdateUserInfo } from "@/lib/types";

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

const initialState: UpdateUserInfo = {
  success: true,
  message: "",
  user: null,
};

const UpdateUserInfoForm = ({ data }: Props) => {
  const [dob, setDob] = useState<string>(
    data.dateOfBirth
      ? new Date(data.dateOfBirth).toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0]
  );

  const [state, formAction] = useActionState<UpdateUserInfo, FormData>(
    updateUserInfo,
    initialState
  );

  return (
    <>
      <form
        action={formAction}
        className="flex flex-col gap-5 w-full"
      >
        <input type="hidden" name="userID" value={data.userID} />

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="flex items-center gap-2">
            <small>First Name:</small>
          </label>
          <input type="text" id="name" name="name" placeholder={data.name} />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="lName" className="flex items-center gap-2">
            <small>Last Name:</small>
          </label>
          <input
            type="text"
            id="lName"
            name="lName"
            placeholder={data.lName || "last name"}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phoneNum" className="flex items-center gap-2">
            <small>Phone Number:</small>
          </label>
          <input
            type="text"
            id="phoneNum"
            name="phoneNum"
            placeholder={data.phoneNumber || "+1 234 567 8901"}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="dateBirth" className="flex items-center gap-2">
            <small>Date of Birth:</small>
          </label>
          <input
            type="date"
            id="dateBirth"
            name="dateBirth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        {!state?.success && (
          <div className="flex items-center gap-2 mx-auto p-2 border-2 border-primary rounded-md">
            <LuOctagonAlert className="icon text-secondary" />
            <small className="text-secondary">{state?.message}</small>
          </div>
        )}
        <button className="col-span-2 button md:w-1/4 mt-2 mx-auto">
          <small>Update</small>
        </button>
      </form>
    </>
  );
};

export default UpdateUserInfoForm;
