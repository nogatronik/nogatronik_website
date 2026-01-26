import React from "react";

import ContentLandAnim from "@/components/animations/ContentLandAnim";
// import CreateRepairReqForm from "@/components/forms/CreateRepairReqForm";

const CreateRequestPage = () => {
  return (
    <main className="min-h-[calc(100vh-105px)] w-full max-w-7xl mx-auto p-5 flex flex-col">
      <ContentLandAnim style="w-full flex flex-col gap-5">
        <h1>Create a Repair Request</h1>

        {/* <CreateRepairReqForm /> */}
      </ContentLandAnim>
    </main>
  );
};

export default CreateRequestPage;
