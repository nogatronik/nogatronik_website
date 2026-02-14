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
    text: "We specialize in recreating discontinued or unavailable parts for aeromodelling and electronics. From broken brackets to custom circuits, we transform physical components or incomplete documentation into precise digital designs, ready for repair, replication, or improvement through Electro-Mechanical design, 3D printing, laser cutting, or CNC fabrication.",
    component: ReverseEng,
  },
  {
    title: "Electronics Repair",
    text: "We specialize in repairing electronic components for RC models, ensuring they operate at peak performance. From ESCs and receivers to servos and flight controllers, our expert team restores functionality and reliability, so you can get back to enjoying your hobby without interruption.",
    component: ElectronicRep,
  },
  {
    title: "Special Projects",
    text: "Have a unique or custom electronic project in mind? We bring your ideas to life, offering tailored solutions and expert craftsmanship for your special electronic projects.",
    component: SpecialProjects,
  },
  {
    title: "Custom RC Kit Assembly",
    text: "We offer a specialized service for RC aircraft enthusiasts. If you have a kit with all the balsa parts ready to assemble, we handle the entire build process for you. From constructing the fuselage and wings to applying the covering film and fine-tuning all electronics—servos, Spektrum receivers, and transmitters—we ensure your model is flight-ready right out of the workshop.",
    component: CtmRCKit,
  },
  {
    title: "Soldering",
    text: "We offer professional soldering solutions for all your electronic needs. Whether you need precise soldering for new components or expert repair of broken or faulty connections, our services ensure secure, long-lasting results. From delicate circuits to complex assemblies, we guarantee top-quality workmanship and reliability.",
    component: Soldering,
  },
  {
    title: "3D Print Design",
    text: "Whether you need functional prototypes, replacement parts, or custom creations, our team specializes in designing and producing high-quality 3D printed components tailored to your needs.",
    component: PrintDesign,
  },
  {
    title: "Laser Cut/Engraving",
    text: "Bring your ideas to life with precision engraving and cutting. From personalized gifts and artistic décor to professional prototypes, DIY kits, and custom souvenirs, we deliver creative, high-quality solutions for every project.",
    component: Laser,
  },
  {
    title: "Advanced Computer & Electronics Services",
    text: "We offer professional computer repair, electronic repair, and programming services for laptops, desktops, and embedded systems. Our approach is engineering-driven, precise, and focused on reliability, performance, and long-term solutions—not temporary fixes.",
    component: CompElectronics,
  },
];
