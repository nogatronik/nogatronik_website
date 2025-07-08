import { FaFacebook, FaYoutube } from "react-icons/fa";
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
    href: "https://www.facebook.com/people/Nogatronik-Engineering/61576808046151/",
    disabled: false,
  },
  {
    icon: RiInstagramFill,
    text: "Instagram",
    href: "https://www.instagram.com/nogatronikeng/",
    disabled: false,
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
