import React from "react";
import { useSession } from "next-auth/react";
import SendProjectReqForm from "@/components/forms/SendProjectReqForm";
import { RiLoginBoxFill } from "react-icons/ri";
import Link from "next/link";

const CtmRCKit = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col gap-5">
      <h3>Custom RC Kit Assembly</h3>
      <p>
        At Nogatronik Engineering, we know that building an RC aircraft is as
        rewarding as it is challenging. For many enthusiasts, the process
        requires time, tools, and specialized knowledge that are not always easy
        to come by. That is why we offer our{" "}
        <strong>Custom RC Kit Assembly</strong> service—designed to take your
        unassembled kit and turn it into a{" "}
        <strong>professionally built, flight-ready model</strong>.
      </p>

      <h3>What We Do</h3>
      <ul className="list-disc list-inside flex flex-col gap-2">
        <li>
          <strong>Complete Airframe Construction:</strong> Careful assembly of
          fuselage, wings, tail, and control surfaces using precise techniques
          that ensure durability and performance.
        </li>
        <li>
          <strong>Covering & Finishing:</strong> Application of high-quality
          covering film for strength, protection, and a polished appearance.
        </li>
        <li>
          <strong>Electronics Installation:</strong> Expert setup of servos,
          motors, ESCs, batteries, and wiring for clean, reliable operation.
        </li>
        <li>
          <strong>Radio System Integration:</strong> Binding and configuring{" "}
          <strong>Spektrum receivers</strong> and <strong>transmitters</strong>{" "}
          (or your preferred brand) for precise, interference-free control.
        </li>
        <li>
          <strong>Final Setup & Testing:</strong> Control surface alignment,
          range testing, and balance adjustments so your aircraft is ready for
          its maiden flight.
        </li>
      </ul>

      <div className="relative">
        <hr className="line-break mt-0" />
      </div>

      <h2 className="m-auto">Ready to Start Your Project</h2>
      {session ? (
        <SendProjectReqForm subject={"Custom RC Kit Assembly"} />
      ) : (
        <div className="m-auto flex flex-col gap-5 items-center">
          <p>In order to send a request, you need to login</p>
          <Link href={"/login"} className="button">
            <RiLoginBoxFill className="icon" />
            <small>Login</small>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CtmRCKit;
