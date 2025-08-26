import React from "react";

import { SERVICES } from "@/utils/repairItems";

const Services = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1>Our Services</h1>
      <ul className="list-decimal marker:font-bold marker:text-lg marker:text-secondary space-y-5 pl-5">
        {SERVICES.map((item, index) => (
          <li key={index}>
            <h3 className="text-secondary">{item.title}</h3>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
