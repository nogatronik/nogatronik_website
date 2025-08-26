import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import { CustomSession } from "@/lib/types";

import ContentLandAnim from "@/components/animations/ContentLandAnim";
import { getAccountDetails } from "@/lib/getData/accountDetails";
import UpdateUserInfo from "@/components/pages/userDashboardPage/userDetailsPage/UpdateUserInfo";
import UpdateAccInfo from "@/components/pages/userDashboardPage/userDetailsPage/UpdateAccInfo";

/**
 *
 * @param userID - string
 *
 * This function takes in the userID and utilizes it to find the user's record on DB.
 * This data will be used to display current values of user and account info.
 *
 * @returns user data
 */
const getData = async (userID: string | undefined) => {
  // if useID is absent, send user to login page
  if (!userID) {
    redirect("/login");
  }

  // Variables
  const userData = await getAccountDetails(userID);

  // If there is no data or an error is present, send to login page
  if (userData.error || !userData.data) {
    redirect("/login");
  }

  return userData.data;
};

/**
 *
 * This component holds the My Details page
 *
 * @returns JSX
 */
const UserDetailsPage = async () => {
  // Variables
  const session: CustomSession | null = await getServerSession(authOptions);
  const userData = await getData(session?.userID);

  return (
    <div className="flex-1 min-h-[calc(100vh-105px)] flex flex-col">
      <ContentLandAnim style="flex flex-col gap-5 p-5">
        <h1>My Details</h1>

        <hr className="border-[1px] border-secondary/25 w-full" />

        <UpdateUserInfo
          data={{
            userID: userData._id,
            name: userData.name,
            lName: userData.lName,
            dateOfBirth: userData.dateOfBirth,
            phoneNumber: userData.phoneNumber,
          }}
        />

        <UpdateAccInfo
          data={{
            userID: userData._id,
            email: userData.email,
            password: userData.password,
            image: userData.image,
            isOAuth: session!.isOAuth,
            provider: session!.provider,
          }}
        />
      </ContentLandAnim>
    </div>
  );
};

export default UserDetailsPage;
