import React from "react";
import { FaSearch } from "react-icons/fa";
import ProductListing from "./ProductListing";

/**
 * This use client component displays all content of /shopping. There is
 * category div, a search input, and products listing
 * @returns JSX - all content of /shopping page
 */
const ShoppingContent = () => {
  return (
    <>
      <div
        id="main-shopping-categories"
        className="flex items-center justify-center gap-5 mx-auto"
      >
        {[1, 2, 3, 4].map((index) => (
          <button key={index} className="group button">
            <small className="button-child">category {index}</small>
          </button>
        ))}
      </div>

      <div
        id="form-search-shopping-product"
        className="flex gap-2 mx-auto w-full md:w-1/2"
      >
        <input type="text" placeholder="search..." className="w-full" />
        <button className="group button w-16">
          <FaSearch className="button-child icon" />
        </button>
      </div>

      <ProductListing />
    </>
  );
};

export default ShoppingContent;
