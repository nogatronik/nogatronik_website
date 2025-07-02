import ContentLandAnim from "@/components/animations/ContentLandAnim";
import Image from "next/image";
import React from "react";
import ImageBg from "./ImageBg";

/**
 *
 * This component displays the image portion of the Hero in home page
 *
 * @returns JSX
 */
const ImageComp = () => {
  return (
    <ContentLandAnim style="flex-[.75] flex flex-col items-center justify-center gap-5 p-5">
      <div className="relative">
        <ImageBg />
        <Image
          src={"/marcoAntonioImgs/ma_one.svg"}
          alt="image of Marco Antonio is an audio set"
          width={450}
          height={450}
          priority
          quality={100}
          style={{
            filter:
              "drop-shadow(0px 2px 5px rgba(50, 50, 93, 0.25)) drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.3))",
            height: "auto",
          }}
          className="w-[450px] h-auto"
        />
      </div>
      <ContentLandAnim style="flex flex-col gap-2" delay={4}>
        <h2>Welcome,</h2>
        <h3 className="font-normal text-base md:text-xl text-secondary">
          This website is in honor and thanks to Marco Antonio Nogales for his
          great spirit and passion for technology.
        </h3>
      </ContentLandAnim>
    </ContentLandAnim>
  );
};

export default ImageComp;
