"use client";

import React, { useEffect, useMemo, useState } from "react";

import { IoIosArrowBack } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { SelectedService, Services as ServiceType } from "@/lib/types";
import ServiceList from "./ServiceList";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SERVICES } from "@/utils/serviceList";

const Services = ({ callbackUrl }: { callbackUrl: string }) => {
  console.log("CallbackUrl:", callbackUrl);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const slugFromUrl = searchParams.get("service");

  const serviceBySlug = useMemo(() => {
    return SERVICES.reduce<Record<string, ServiceType>>((acc, s) => {
      acc[s.slug] = s;
      return acc;
    }, {});
  }, []);

  const [selectedService, setSelectedService] =
    useState<SelectedService | null>(null);

  useEffect(() => {
    if (!slugFromUrl) {
      setSelectedService(null);
      return;
    }

    const item = serviceBySlug[slugFromUrl];
    if (!item) return;

    setSelectedService({
      title: item.title,
      slug: item.slug,
      component: item.component,
    });
  }, [slugFromUrl, serviceBySlug]);

  return (
    <div className="flex flex-col gap-5 flex-1">
      {!selectedService && <h1>Our Services</h1>}
      <AnimatePresence mode="wait">
        {selectedService ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col gap-5"
          >
            <button
              onClick={() => {
                setSelectedService(null);
                const params = new URLSearchParams(searchParams.toString());
                params.delete("service");
                const qs = params.toString();
                router.push(qs ? `${pathname}?${qs}` : pathname, {
                  scroll: false,
                });
              }}
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
