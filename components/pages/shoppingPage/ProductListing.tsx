import Link from "next/link";
import React from "react";

import { FaImage } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Rating from "./Rating";

/**
 *
 * This component displays all products with pagination
 *
 * @returns JSX - prouct listing
 */
const ProductListing = () => {
  return (
    <>
      <div className="w-full grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <Link
            href={`/shopping/${index}`}
            key={index}
            className="group flex flex-col gap-2"
          >
            <div className="w-full h-[175px] bg-extra rounded-3xl shadow-onRest grid place-items-center">
              <FaImage className="icon text-5xl group-hover:scale-105 anim-transition" />
            </div>
            <div className="flex flex-col gap-2 p-2 mx-4 rounded-lg group-hover:bg-extra/50 backdrop-blur-[2px] group-hover:shadow-onHover group-hover:-translate-y-10 anim-transition">
              <div className="flex items-center justify-between">
                <p className="font-bold text-primary/85">Product Title</p>
                <small>$19.99</small>
              </div>
              <div className="flex items-center gap-2">
                <Rating />
                <small>
                  {" "}
                  <span className="mr-2">-</span> 545 reviews
                </small>
                <button className="group/add button w-fit ml-auto bg-accent hover:bg-accent/50">
                  <small>add to cart</small>
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-auto">
        <button className="group">
          <IoIosArrowBack className="icon text-lg group-hover:-translate-x-2 anim-transition" />
        </button>
        {[1, 2, 3, 4, 5].map((index) => (
          <button key={index} className="group button w-10 h-10">
            <small className="button-child">{index}</small>
          </button>
        ))}
        <button className="group cursor-pointer">
          <IoIosArrowForward className="icon text-lg group-hover:translate-x-2 anim-transition" />
        </button>
      </div>
    </>
  );
};

export default ProductListing;
