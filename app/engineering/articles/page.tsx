import React from "react";
import Image from "next/image";

import ContentLandAnim from "@/components/animations/ContentLandAnim";
// import ArticleListing from "@/components/pages/engPage/articles/ArticleListing";

/**
 *
 * This component displays the Articles Page
 *
 * @returns JSX
 */
const ArticlesPage = () => {
  return (
    <main className="min-h-[calc(100vh-105px)] w-full max-w-7xl mx-auto p-5 flex flex-col justify-center">
      <ContentLandAnim style="flex flex-col gap-5 items-center justify-center">
        {/* <ArticleListing /> */}
        <Image
          src={"/helpers/empty-container.svg"}
          alt="empty folder"
          width={70}
          height={70}
          priority
          className="w-56 h-auto anim-transition"
        />
        <small className="text-center">
          Currently, there are no articles to read.
          <br />
          Please come back later.
        </small>
      </ContentLandAnim>
    </main>
  );
};

export default ArticlesPage;
