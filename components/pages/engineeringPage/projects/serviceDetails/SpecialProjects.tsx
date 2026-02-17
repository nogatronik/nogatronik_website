import React from "react";
import { useSession } from "next-auth/react";
import SendProjectReqForm from "@/components/forms/SendProjectReqForm";
import Link from "next/link";
import { RiLoginBoxFill } from "react-icons/ri";
import { usePathname, useSearchParams } from "next/navigation";

const SpecialProjects = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const qs = searchParams.toString();
  const callbackUrl = qs ? `${pathname}?${qs}` : pathname;

  return (
    <div className="flex flex-col gap-5">
      <h3>Special Projects</h3>
      <p>
        At Nogatronik Engineering, we understand that some ideas do not fit into
        a standard category—they require innovation, creativity, and precision.
        That is where our <strong>Special Projects</strong> service comes in.
        <br /> Whether you have a unique electronic concept, a one-of-a-kind
        prototype, or a complex system that needs expert development, we bring
        your vision to life. Our team combines engineering expertise, hands-on
        craftsmanship, and tailored design to create solutions that meet your
        exact goals.
      </p>

      <h3>What We Offer</h3>
      <ul className="list-disc list-inside flex flex-col gap-2">
        <li className="text-secondary">
          <strong>Custom Electronics Design:</strong> From circuit development
          to system integration, we design electronics built specifically for
          your needs.
        </li>
        <li className="text-secondary">
          <strong>Prototyping & Proof of Concept:</strong> Rapid development of
          working prototypes to validate and refine your idea.
        </li>
        <li className="text-secondary">
          <strong>Embedded Systems & Automation:</strong> Smart solutions with
          microcontrollers, sensors, and communication protocols.
        </li>
        <li className="text-secondary">
          <strong>Product Customization:</strong> Modify or enhance existing
          devices to match your requirements.
        </li>
        <li className="text-secondary">
          <strong>End-to-End Project Support:</strong> From concept sketches and
          component sourcing to final testing and delivery.
        </li>
      </ul>

      <div className="relative">
        <hr className="line-break mt-0" />
      </div>

      <h2 className="m-auto">Ready to Start Your Project</h2>
      {session ? (
        <SendProjectReqForm subject={"Special Project"} />
      ) : (
        <div className="m-auto flex flex-col gap-5 items-center">
          <p>In order to send a request, you need to login</p>
          <Link
            href={`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`}
            className="button"
          >
            <RiLoginBoxFill className="icon" />
            <small>Login</small>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SpecialProjects;
