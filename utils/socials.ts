import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { SocialLink } from "@/lib/types";

/*
Social Links
*/
export const SOCIALS: SocialLink[] = [
  {
    icon: FaFacebook,
    text: "Facebook",
    href: "#",
    disabled: true,
  },
  {
    icon: RiInstagramFill,
    text: "Instagram",
    href: "#",
    disabled: true,
  },
  {
    icon: FaLinkedin,
    text: "LinkedIn",
    href: "#",
    disabled: true,
  },
  {
    icon: FaXTwitter,
    text: "X",
    href: "#",
    disabled: true,
  },
  {
    icon: FaYoutube,
    text: "Youtube",
    href: "https://www.youtube.com/@nogatronik",
    disabled: false,
  },
];
