import React from "react";

import { SideHelpServices } from "@/components/pages/helpCustomerService/SideHelpServices";

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
const HelpServicesLayout = ({ children }: Props) => {
  return (
    <main className="min-h-[calc(100vh-105px)] flex flex-col md:flex-row p-5">
      <SideHelpServices />
      {children}
    </main>
  );
};

export default HelpServicesLayout;
