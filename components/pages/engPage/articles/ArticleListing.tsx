import Link from "next/link";
import React from "react";

import { FaImage } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

/**
 *
 * This component displays all articles in web app
 *
 * @returns JSX
 */
const ArticleListing = () => {
  return (
    <>
      <div className="w-full grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <Link
            href={`/engineering/articles/${index}`}
            key={index}
            className="group flex flex-col gap-2"
          >
            <div className="w-full h-[175px] bg-extra rounded-3xl shadow-onRest grid place-items-center">
              <FaImage className="icon text-5xl group-hover:scale-105 anim-transition" />
            </div>
            <div className="flex flex-col gap-1 p-2 mx-4 rounded-lg group-hover:bg-extra/50 backdrop-blur-[2px] group-hover:shadow-onHover group-hover:-translate-y-10 anim-transition">
              <p className="font-bold text-primary/85">Article Title</p>
              <small>published Feb 19, 2025</small>
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

export default ArticleListing;
