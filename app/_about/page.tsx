import ContentLandAnim from "@/components/animations/ContentLandAnim";
import React from "react";

/**
 *
 * This component displays the About Page
 *
 * @returns JSX
 */
const AboutPage = () => {
  return (
    <main className="min-h-[calc(100vh-105px)] w-full max-w-7xl mx-auto p-5 flex flex-col items-center justify-center">
      <ContentLandAnim style="max-w-[350px] text-center">
        <small className="">Pending...</small>
      </ContentLandAnim>
    </main>
  );
};

export default AboutPage;
