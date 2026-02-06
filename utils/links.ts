import Dashboard from "@/components/global/navbar/navbarComps/userSidebar/userSidebarComps/Dashboard";
import Favorites from "@/components/global/navbar/navbarComps/userSidebar/userSidebarComps/Favorites";
import YourCart from "@/components/global/navbar/navbarComps/userSidebar/userSidebarComps/YourCart";
import { BsFillInfoSquareFill } from "react-icons/bs";
import {
  FaHome,
  FaHouseUser,
  FaShoppingBag,
  FaShoppingCart,
  FaShippingFast,
  FaHandshake,
  FaClipboard,
} from "react-icons/fa";
import { HiIdentification } from "react-icons/hi";
import {
  MdAssignmentReturn,
  MdDashboard,
  MdFavorite,
  MdPayment,
  MdPrivacyTip,
} from "react-icons/md";
import { PiAirplaneTakeoffFill } from "react-icons/pi";
import { GoLaw } from "react-icons/go";
import { RiLogoutBoxFill, RiShoppingBagFill } from "react-icons/ri";
import {
  DashboardNavLinks,
  EngSubNav,
  HomeAboutLink,
  NavLink,
  ShoppingSidePanelLinks,
} from "@/lib/types";
import IdeaDesc from "@/components/pages/aboutPage/websiteBg/IdeaDesc";
import MAMention from "@/components/pages/aboutPage/websiteBg/MAMention";

// Main nav links
export const NAVLINKS: NavLink[] = [
  {
    href: "/",
    icon: FaHome,
    text: "Home",
  },
  {
    href: "/engineering",
    icon: MdDashboard,
    text: "Engineering",
  },
  {
    href: "/hobbies",
    icon: PiAirplaneTakeoffFill,
    text: "Hobbies",
  },
  {
    href: "/shopping",
    icon: FaShoppingBag,
    text: "Shopping",
  },
  {
    href: "/about",
    icon: BsFillInfoSquareFill,
    text: "About",
  },
];

// Side nav links for shopping purposes
export const SIGNED_USER_SIDE_PANEL_BTNS: ShoppingSidePanelLinks[] = [
  {
    component: Dashboard,
    icon: FaHouseUser,
    text: "Account",
    auth: true,
  },
  {
    component: Favorites,
    icon: MdFavorite,
    text: "Favorites",
    auth: true,
  },
  {
    component: YourCart,
    icon: FaShoppingCart,
    text: "Your Cart",
    auth: false,
  },
];

// Dashboard side panel nav links
export const DASHBOARD_NAV: DashboardNavLinks[] = [
  {
    type: "user",
    text: "My Details",
    icon: HiIdentification,
    href: "/user-account/details",
  },
  {
    type: "user",
    text: "My Project Requests",
    icon: FaClipboard,
    href: "/user-account/project-requests",
  },
  {
    type: "user",
    text: "My Orders",
    icon: RiShoppingBagFill,
    href: "/user-account/orders",
  },
  {
    type: "user",
    text: "Payment Methods",
    icon: MdPayment,
    href: "/user-account/payment-methods",
  },
  {
    type: "action",
    text: "Sign out",
    icon: RiLogoutBoxFill,
    href: null,
  },
];

// Side panel help services links
export const HELP_SERVICES_LINKS: NavLink[] = [
  {
    href: "/help-customer-service/shipping-delivery",
    icon: FaShippingFast,
    text: "Shipping & Delivery",
  },
  {
    href: "/help-customer-service/return-refund-policy",
    icon: MdAssignmentReturn,
    text: "Return & Refund Policy",
  },
  {
    href: "/help-customer-service/privacy-policy",
    icon: MdPrivacyTip,
    text: "Privacy Policy",
  },
  {
    href: "/help-customer-service/terms-of-service",
    icon: FaHandshake,
    text: "Terms of Service",
  },
  {
    href: "/help-customer-service/code-of-conduct",
    icon: GoLaw,
    text: "Code of Conduct",
  },
];

// Engineering sub menu
export const SUBNAV: EngSubNav[] = [
  {
    href: "/engineering/projects",
    image: "/contentSumImgs/repair_img_summary.svg",
    description:
      "Ready to make your ideas come to life, follow the progress, and enjoy the final result.",
    text: "Projects",
  },
  {
    href: "/engineering/assets",
    image: "/contentSumImgs/download_img_summary.svg",
    description:
      "Ready to download, come and look at my manuals, blueprints, 3D parts, etc.",
    text: "Assets",
  },
  {
    href: "/engineering/articles",
    image: "/contentSumImgs/article_img_summary.svg",
    description:
      "Ready to learn and exchange ideas, come and look at my published articles.",
    text: "Articles",
  },
];

// About links
export const ABOUT_LINKS: HomeAboutLink[] = [
  { component: IdeaDesc, key: "idea" },
  { component: MAMention, key: "ma_mention" },
];
