import ContentLandAnim from "@/components/animations/ContentLandAnim";
import Rating from "@/components/pages/shoppingPage/Rating";
import React from "react";
import { FaImage } from "react-icons/fa";

/**
 *
 * This component displays the page of a shopping product
 *
 * @returns JSX
 */
const ProductPage = () => {
  return (
    <main className="w-full max-w-7xl mx-auto p-5 min-h-[calc(100vh-105px)]">
      <ContentLandAnim style="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1 flex flex-col-reverse md:flex-row gap-2">
            <div className="flex md:flex-col gap-2">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="flex flex-1 h-20 md:h-auto min-w-24 items-center justify-center bg-extra"
                >
                  <FaImage className="icon text-xl" />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center w-full h-[400px] bg-extra">
              <FaImage className="icon text-5xl" />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <h1>Procuct Name</h1>
            <div className="flex gap-5">
              <Rating />
              <small>545 reviews</small>
            </div>
            <p className="mt-2 font-semibold">$19.99</p>
            <p>FREE delivery Tomorrow, March 1, 2025</p>
            <small className="mt-auto">Looking for another version:</small>
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="flex w-20 h-20 items-center justify-center bg-extra"
                >
                  <FaImage className="icon text-xl" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="min-h-[300px] flex items-center justify-center">
          [ product description ]
        </p>

        <h2>Reviews</h2>
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex items-start gap-5">
              <div className="flex items-center gap-2">
                <div className="rounded-full w-10 h-10 bg-accent"></div>
                <div className="flex flex-col gap-1">
                  <small>Username</small>
                  <small>Feb 19, 2025</small>
                </div>
              </div>
              <Rating />
              <button className="group button w-fit ml-auto">
                <small className="button-child">helpful</small>
              </button>
            </div>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              eligendi dolor architecto consequatur, qui ut alias dolorem.
              Deleniti vitae dolorem illum molestiae sapiente. At pariatur sunt
              iure officia facere voluptas minus sequi voluptate, incidunt,
              deleniti ea hic, numquam ratione rerum minima accusantium magnam
              saepe. Accusamus sint consequatur sit exercitationem nulla.
            </p>
          </div>
        ))}
      </ContentLandAnim>
    </main>
  );
};

export default ProductPage;
