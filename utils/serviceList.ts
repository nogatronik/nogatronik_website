import CompElectronics from "@/components/pages/engineeringPage/projects/serviceDetails/CompElectronics";
import CtmRCKit from "@/components/pages/engineeringPage/projects/serviceDetails/CtmRCKit";
import ElectronicRep from "@/components/pages/engineeringPage/projects/serviceDetails/ElectronicRep";
import Laser from "@/components/pages/engineeringPage/projects/serviceDetails/Laser";
import PrintDesign from "@/components/pages/engineeringPage/projects/serviceDetails/PrintDesign";
import ReverseEng from "@/components/pages/engineeringPage/projects/serviceDetails/ReverseEng";
import Soldering from "@/components/pages/engineeringPage/projects/serviceDetails/Soldering";
import SpecialProjects from "@/components/pages/engineeringPage/projects/serviceDetails/SpecialProjects";
import { RepairStep } from "@/lib/types";
import { FaMicroscope, FaShippingFast } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";

export const REPAIR_STEPS: RepairStep[] = [
  {
    image: IoDocumentTextOutline,
    description: "Describe your issue, and provide shipment information.",
  },
  {
    image: FaShippingFast,
    description:
      "Ship your item or deliver it personally. Currently, we do not cover shipment.",
  },
  {
    image: FaMicroscope,
    description:
      "We work on your item. Pricing will be given to you at this point.",
  },
  {
    image: FaCircleCheck,
    description:
      "When the repair is finished, we ship your device once payment is completed",
  },
];

export const SERVICES = [
  {
    title: "Reverse Engineering",
    text: "We recreate discontinued or unavailable mechanical and electronic components. Using precise CAD modeling, circuit redesign, and fabrication-ready outputs, we transform physical parts or partial documentation into accurate digital designs. The result is a reliable component ready for repair, replication, or improvement.",
    slug: "reverse-engineering",
    component: ReverseEng,
  },
  {
    title: "Electronics Repair",
    text: "We repair electronic components for RC models and specialized systems. Our service includes diagnostics, component-level repair, calibration, and functional testing. The result is restored performance and dependable operation.",
    slug: "electronics-repair",
    component: ElectronicRep,
  },
  {
    title: "Special Projects",
    text: "We develop custom electronic solutions for unique or non-standard requirements. Our work includes circuit design, prototyping, embedded systems integration, and system refinement. The result is a fully engineered solution tailored to your specific objectives.",
    slug: "special-projects",
    component: SpecialProjects,
  },
  {
    title: "Custom RC Kit Assembly",
    text: "We provide professional assembly services for RC aircraft kits. Our process includes airframe construction, electronics installation, radio configuration, and final calibration. The result is a flight-ready model built for precision and reliability.",
    slug: "custom-rc-kit-assembly",
    component: CtmRCKit,
  },
  {
    title: "Soldering",
    text: "We offer professional soldering for electronic assemblies and repairs. Our service includes component installation, rework, micro-soldering, and custom wiring builds. The result is clean, secure connections built for long-term durability.",
    slug: "soldering",
    component: Soldering,
  },
  {
    title: "3D Print Design",
    text: "We design and produce custom 3D printed components for prototypes and functional applications. Our process includes precision CAD modeling, material selection, and optimized print preparation. The result is a strong, accurate part ready for real-world use.",
    slug: "3d-print-design",
    component: PrintDesign,
  },
  {
    title: "Laser Cut/Engraving",
    text: "We provide precision laser cutting and engraving for functional and creative applications. Our service includes material preparation, detailed design work, and clean fabrication across wood, acrylic, and similar materials. The result is a high-quality piece produced with accuracy and consistency.",
    slug: "laser-cut-engraving",
    component: Laser,
  },
  {
    title: "Advanced Computer & Electronics",
    text: "We provide engineering-level computer repair, electronic diagnostics, and programming services. Our work includes hardware troubleshooting, board-level repair, firmware configuration, and system optimization. The result is a stable, performance-focused solution designed for long-term reliability.",
    slug: "advanced-computer-electronics",
    component: CompElectronics,
  },
];

export type ServiceSlug = (typeof SERVICES)[number]["slug"];
