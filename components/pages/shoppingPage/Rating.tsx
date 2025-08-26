"use client";

import React from "react";

import { Rating as Rate } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

/**
 * This component will display the rating of a product
 *
 * @returns Rate component
 */
const Rating = () => {
  return (
    <Rate
      style={{ maxWidth: 95 }}
      value={3.7}
      onChange={() => {}}
      items={5}
      readOnly={true}
    />
  );
};

export default Rating;
