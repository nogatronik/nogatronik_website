import React from "react";
import { useSession } from "next-auth/react";

import SendProjectReqForm from "@/components/forms/SendProjectReqForm";
import Link from "next/link";
import { RiLoginBoxFill } from "react-icons/ri";
import { usePathname, useSearchParams } from "next/navigation";

const ReverseEng = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const qs = searchParams.toString();
  const callbackUrl = qs ? `${pathname}?${qs}` : pathname;
  return (
    <div className="flex flex-col gap-5">
      <h3>Reverse Engineering</h3>
      <p>
        In the world of <strong>hobbies and aeromodelling</strong>, one of the
        biggest challenges is finding replacement parts. Many components become{" "}
        <strong>discontinued, hard to source, or simply unavailable</strong>,
        leaving projects grounded and models incomplete. Nogatronik Engineering
        solves this problem with our <strong>Reverse Engineering</strong>{" "}
        service, designed to give your projects a second life.
      </p>

      <h3>What We Do</h3>
      <p>
        Starting from an existing part, electronic board, or even partial
        documentation, we recreate a <strong>precise digital design</strong>{" "}
        that can be used for:
      </p>
      <ul className="list-disc list-inside flex flex-col gap-2">
        <li className="text-secondary">
          <strong>Repair & Replication:</strong> Reproducing obsolete or broken
          components with accuracy.
        </li>
        <li className="text-secondary">
          <strong>Upgrades & Improvements:</strong> Enhancing the design for
          better performance and durability.
        </li>
        <li className="text-secondary">
          <strong>Customization:</strong> Tailoring parts to fit your specific
          project requirements.
        </li>
      </ul>

      <h3>Capabilities</h3>
      <ul className="list-disc list-inside flex flex-col gap-2">
        <li className="text-secondary">
          <strong>3D Modeling & CAD:</strong> High-precision digital
          reconstruction of mechanical parts.
        </li>
        <li className="text-secondary">
          <strong>Upgrades & Improvements:</strong> Recreation of circuit
          schematics, PCBs, and controllers.
        </li>
        <li className="text-secondary">
          <strong>Fabrication-Ready Files:</strong> Deliverables prepared for 3D
          printing, laser cutting, or CNC machining.
        </li>
        <li className="text-secondary">
          <strong>Prototype & Testing:</strong> Physical production and
          validation to ensure a perfect fit and reliable function.
        </li>
      </ul>

      <div className="relative">
        <hr className="line-break mt-0" />
      </div>

      <h2 className="m-auto">Ready to Start Your Project</h2>
      {session ? (
        <SendProjectReqForm subject={"Reverse Engineering"} />
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

export default ReverseEng;
