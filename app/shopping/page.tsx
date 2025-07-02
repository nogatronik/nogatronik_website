import React from "react";
import Image from "next/image";

import ContentLandAnim from "@/components/animations/ContentLandAnim";
// import ShoppingContent from "@/components/pages/shopping/ShoppingContent";

/**
 *
 * This component displays the Shopping Page
 *
 * @returns JSX
 */
const page = () => {
  return (
    <main className="min-h-[calc(100vh-105px)] w-full max-w-7xl mx-auto p-5 flex flex-col justify-center">
      <ContentLandAnim style="flex flex-col items-center justify-center gap-5">
        {/* <ShoppingContent /> */}
        <Image
          src={"/helpers/no_products.svg"}
          alt="empty folder"
          width={70}
          height={70}
          priority
          className="w-56 h-auto anim-transition"
        />
        <small className="text-center">
          Currently, there are no products to buy.
          <br />
          Please come back later.
        </small>
      </ContentLandAnim>
    </main>
  );
};

export default page;
