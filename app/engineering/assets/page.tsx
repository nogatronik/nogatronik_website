import ContentLandAnim from "@/components/animations/ContentLandAnim";
import Image from "next/image";
import React from "react";

/**
 *
 * This component displays the Assets Page
 *
 * @returns JSX
 */
const AssetsPage = () => {
  return (
    <main className="min-h-[calc(100vh-105px)] w-full max-w-7xl mx-auto p-5 flex flex-col justify-center">
      <ContentLandAnim style="flex-1 flex flex-col gap-2 items-center justify-center">
        <Image
          src={"/helpers/empty-container.svg"}
          alt="empty folder"
          width={70}
          height={70}
          priority
          className="w-56 h-auto anim-transition"
        />
        <small className="text-center">
          Currently, there are no assets to download.
          <br />
          Please come back later.
        </small>
      </ContentLandAnim>
    </main>
  );
};

export default AssetsPage;
