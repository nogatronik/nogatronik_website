"use client";

import React, { useState } from "react";

import { IoIosArrowBack } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { SelectedService } from "@/lib/types";
import ServiceList from "./ServiceList";

const Services = () => {
  const [selectedService, setSelectedService] =
    useState<SelectedService | null>(null);

  return (
    <div className="flex flex-col gap-5 flex-1">
      <h1>Our Services</h1>
      <AnimatePresence mode="wait">
        {selectedService ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col gap-5"
          >
            <button
              onClick={() => setSelectedService(null)}
              className="group flex gap-2 items-center w-fit cursor-pointer"
            >
              <IoIosArrowBack className="icon link-child anim-transition group-hover:-translate-x-1" />
              <small className="link-child anim-transition">
                back to services
              </small>
            </button>

            {<selectedService.component />}
          </motion.div>
        ) : (
          <ServiceList setSelectedService={setSelectedService} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
