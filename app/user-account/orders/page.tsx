import React from "react";

import ContentLandAnim from "@/components/animations/ContentLandAnim";

/**
 *
 * This component holds the Orders page
 *
 * @returns JSX
 */
const UserOrdersPage = () => {
  return (
    <div className="min-h-[calc(100vh-105px)] flex flex-col">
      <ContentLandAnim style="flex flex-col md:flex-row gap-5 p-5">
        <h1>My Orders</h1>
      </ContentLandAnim>
    </div>
  );
};

export default UserOrdersPage;
