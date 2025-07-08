import React from "react";

import ContentLandAnim from "@/components/animations/ContentLandAnim";

const page = () => {
  return (
    <div className="flex-1 min-h-[calc(100vh-105px)] flex flex-col">
      <ContentLandAnim style="flex flex-col gap-5 p-5">
        <h1>Return Policy</h1>

        <hr className="border-[1px] border-secondary/25 w-full" />
      </ContentLandAnim>
    </div>
  );
};

export default page;
