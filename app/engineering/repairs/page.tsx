import React from "react";

import ContentLandAnim from "@/components/animations/ContentLandAnim";
import Services from "@/components/pages/engineeringPage/repairs/Services";
import RequestSteps from "@/components/pages/engineeringPage/repairs/RequestSteps";
import SendRequest from "@/components/pages/engineeringPage/repairs/StartRequest";

const RepairPage = () => {
  return (
    <main className="min-h-[calc(100vh-105px)] w-full max-w-7xl mx-auto p-5 flex flex-col">
      <ContentLandAnim style="flex flex-col gap-20">
        <Services />

        <div className="relative">
          <hr className="line-break mt-0" />
        </div>

        <RequestSteps />

        <div className="relative">
          <hr className="line-break mt-0" />
        </div>

        <SendRequest />
      </ContentLandAnim>
    </main>
  );
};

export default RepairPage;
