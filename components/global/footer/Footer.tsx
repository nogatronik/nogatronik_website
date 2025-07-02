"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import { SOCIALS } from "@/utils/socials";

import ContentLandAnim from "@/components/animations/ContentLandAnim";

/**
 *
 * This component shows the footer of the web app
 *
 * @returns - JSX
 */
const Footer = () => {
  // Variables
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  return (
    <div className="overflow-hidden">
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ y }}
        ref={container}
        className="p-5 md:p-20 shadow-onHover"
      >
        <ContentLandAnim style="w-full flex flex-col gap-2">
          <div className="flex flex-col gap-10 md:flex-row md:justify-between">
            <div className="flex flex-col gap-2 md:w-[450px]">
              <Image
                src={"/logo.svg"}
                alt="nogatronik Logo"
                width={70}
                height={70}
                priority
                className="logo-resize drop-shadow-md"
              />
              <p>
                Subscribe to our newsletter for the latest updates on articles,
                videos, assets, and products
              </p>
              <div className="flex flex-row gap-2">
                <input
                  type="text"
                  placeholder="your email here"
                  className="flex-1"
                />
                <button className=" group button">
                  <small className="button-child">subscribe</small>
                </button>
              </div>
              <small>
                By subscribing, you consent to our Privacy Policy and agree to
                receive updates.
              </small>
            </div>
            <div className="flex gap-10">
              <div className="flex flex-col gap-2 ">
                <h2 className="text-primary">Get Help</h2>
                <Link href={"#"} className="group">
                  <small className="link-child anim-transition">
                    Shipping & Delivery
                  </small>
                </Link>
                <Link href={"#"} className="group">
                  <small className="link-child anim-transition">
                    Return Policy
                  </small>
                </Link>
                <Link href={"#"} className="group">
                  <small className="link-child anim-transition">
                    Contact Us
                  </small>
                </Link>
              </div>

              <div className="flex flex-col gap-2 ">
                <h2 className="text-primary">Stay Connected</h2>
                {SOCIALS.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    className={`group cursor-pointer flex items-center gap-2 ${
                      social.disabled && "pointer-events-none opacity-50"
                    }`}
                  >
                    <social.icon className="icon link-child anim-transition" />
                    <small className="link-child anim-transition">
                      {social.text}
                    </small>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-5 flex-col-reverse md:flex-row  md:items-center md:justify-between mt-5">
            <small>
              &copy; {new Date().getFullYear()} Nogatronik. All rights reserved.
            </small>

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5">
              <Link href={"#"} className="group w-fit">
                <small className="link-child anim-transition">
                  Privacy Policy
                </small>
              </Link>
              <Link href={"#"} className="group w-fit">
                <small className="link-child anim-transition">
                  Terms of Service
                </small>
              </Link>
              <Link href={"#"} className="group w-fit">
                <small className="link-child anim-transition">
                  Code of Conduct
                </small>
              </Link>
            </div>
          </div>
        </ContentLandAnim>
      </motion.footer>
    </div>
  );
};

export default Footer;
