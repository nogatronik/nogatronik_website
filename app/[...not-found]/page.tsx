import React from "react";
import Link from "next/link";
import Image from "next/image";

import ContentLandAnim from "@/components/animations/ContentLandAnim";

/**
 *
 * This component displays the 404 Page
 *
 * @returns JSX
 */
const NotFoundPage = () => {
  return (
    <main className="min-h-[calc(100vh-105px)] w-full max-w-7xl mx-auto p-5 flex flex-col items-center justify-center">
      <ContentLandAnim style="flex flex-col items-center gap-5">
        <Image
          src={"/helpers/notFound_img.svg"}
          alt="void"
          width={250}
          height={250}
          priority
          quality={100}
          className="w-[250px] h-auto"
        />
        <h1>404 - Page Not Found</h1>
        <p>
          It appears that you&apos;ve reached to a page that doesn&apos;t exist.{" "}
        </p>

        <Link href={"/"} className="group button">
          <small className="button-child">go back home</small>
        </Link>
      </ContentLandAnim>
    </main>
  );
};

export default NotFoundPage;
