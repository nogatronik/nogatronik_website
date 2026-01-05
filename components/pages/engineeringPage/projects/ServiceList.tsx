import React from "react";
import { motion } from "framer-motion";

import { SERVICES } from "@/utils/serviceList";
import { SelectedService } from "@/lib/types";
import { IoIosArrowForward } from "react-icons/io";

interface Props {
  setSelectedService: React.Dispatch<SelectedService | null>;
}

const ServiceList = ({ setSelectedService }: Props) => {
  return (
    <motion.div
      key="service-list"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-5 place-content-center flex-1"
    >
      {SERVICES.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 rounded-md p-5 bg-muted hover:shadow-onHover anim-transition"
        >
          <h3 className="text-secondary">{item.title}</h3>
          <p>{item.text}</p>
          <button
            onClick={() =>
              setSelectedService({
                component: item.component,
                title: item.title,
              })
            }
            className="group cursor-pointer flex gap-2 items-center w-fit mt-auto"
          >
            <small className="link-child anim-transition">Learn more</small>
            <IoIosArrowForward className="icon link-child anim-transition group-hover:translate-x-1" />
          </button>
        </div>
      ))}
    </motion.div>
  );
};

export default ServiceList;
