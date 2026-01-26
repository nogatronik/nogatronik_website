import ContentLandAnim from "@/components/animations/ContentLandAnim";
import ProjectReqList from "@/components/pages/userDashboardPage/userProjectRequets/ProjectReqList";
import { authOptions } from "@/lib/auth";
import { getProjectRequests } from "@/lib/getData/projectRequests";
import { CustomSession } from "@/lib/types";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const getData = async (userID: string | undefined) => {
  // if useID is absent, send user to login page
  if (!userID) {
    redirect("/login");
  }

  // Variables
  const userData = await getProjectRequests(userID);

  // If there is no data or an error is present, send to login page
  if (userData.error || !userData.data) {
    redirect("/login");
  }

  return userData.data;
};

const ProjRequestsPage = async () => {
  const session: CustomSession | null = await getServerSession(authOptions);
  const userProjRequests = await getData(session?.userID);

  return (
    <div className="flex-1 min-h-[calc(100vh-105px)] flex flex-col">
      <ContentLandAnim style="flex flex-col gap-5 p-5">
        <h1>My Project Requests</h1>
        <hr className="border-[1px] border-secondary/25 w-full" />
        <ProjectReqList userProjRequests={userProjRequests} />
      </ContentLandAnim>
    </div>
  );
};

export default ProjRequestsPage;
