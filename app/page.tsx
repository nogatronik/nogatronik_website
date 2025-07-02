import Hero from "@/components/pages/homePage/hero/Hero";
import PlaneScene from "@/components/pages/homePage/planeScene/PlaneScene";
import WebsiteBg from "@/components/pages/homePage/websiteBg/WebsiteBg";
import Principles from "@/components/pages/homePage/principals/Principles";
import ContentSummary from "@/components/pages/homePage/contentSummary/ContentSummary";

/**
 *
 * This component displays the Home Page
 *
 * @returns JSX
 */
export default function Home() {
  return (
    <main className=" flex-1 flex flex-col overflow-hidden">
      <Hero />
      <PlaneScene />
      <WebsiteBg />
      <Principles />
      <ContentSummary />
    </main>
  );
}
