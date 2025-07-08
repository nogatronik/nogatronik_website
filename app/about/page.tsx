import Principles from "@/components/pages/homePage/principals/Principles";
import WebsiteBg from "@/components/pages/homePage/websiteBg/WebsiteBg";
import React from "react";

/**
 *
 * This component displays the About Page
 *
 * @returns JSX
 */
const AboutPage = () => {
  return (
    <main className=" flex-1 flex flex-col overflow-hidden">
      <WebsiteBg />
      <Principles />
    </main>
  );
};

export default AboutPage;
