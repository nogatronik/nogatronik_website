import Image from "next/image";
import React from "react";

/**
 *
 * This component displays the image part of the About section in home page
 *
 * @returns JSX
 */
const ImageComp = () => {
  return (
    <div className="relative flex-[.75] flex flex-col items-center justify-center">
      <Image
        src={"/marcoAntonioImgs/ma_two.jpg"}
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
  );
};

export default ImageComp;
