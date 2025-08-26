import React from "react";

import SideDashboardNav from "@/components/pages/userDashboardPage/SideDashboardNav";

interface Props {
  children: React.ReactNode;
}

/**
 *
 * @param children: React.ReactNode
 *
 * This component holds the main layout of the user's dashboard
 *
 * @returns JSX
 */
const UserDashboardLayout = ({ children }: Props) => {
  return (
    <main className="min-h-[calc(100vh-105px)] flex flex-col md:flex-row p-5">
      <SideDashboardNav />
      {children}
    </main>
  );
};

export default UserDashboardLayout;
