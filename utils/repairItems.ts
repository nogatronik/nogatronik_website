import { RepairStep } from "@/lib/types";
import { FaMicroscope, FaShippingFast } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";

export const REPAIR_STEPS: RepairStep[] = [
  {
    image: IoDocumentTextOutline,
    description:
      "Select a service, describe your issue, and provide shipment information.",
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
    title: "Receivers",
    text: "We offer expert antenna repair and receiver programming services tailored to your RC models. Whether it’s fixing damaged antennas or fine-tuning receivers to your exact specifications, we ensure precise restoration, seamless integration, and optimal performance for all your radio control equipment.",
  },
  {
    title: "Soldering",
    text: "We offer professional soldering solutions for all your electronic needs. Whether you need precise soldering for new components or expert repair of broken or faulty connections, our services ensure secure, long-lasting results. From delicate circuits to complex assemblies, we guarantee top-quality workmanship and reliability.",
  },
  {
    title: "RC Electronics",
    text: "We specialize in repairing electronic components for RC models, ensuring they operate at peak performance. From ESCs and receivers to servos and flight controllers, our expert team restores functionality and reliability, so you can get back to enjoying your hobby without interruption.",
  },
  {
    title: "Special Projects",
    text: "Have a unique or custom electronic project in mind? We bring your ideas to life, offering tailored solutions and expert craftsmanship for your special electronic projects.",
  },
];
