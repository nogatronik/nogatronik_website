import React from "react";
// import RequestSteps from "../RequestSteps";
// import StartRequest from "../StartRequest";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { RiLoginBoxFill } from "react-icons/ri";
import SendProjectReqForm from "@/components/forms/SendProjectReqForm";
import { usePathname, useSearchParams } from "next/navigation";

const ElectronicRep = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const qs = searchParams.toString();
  const callbackUrl = qs ? `${pathname}?${qs}` : pathname;
  return (
    <div className="flex flex-col gap-5">
      <h3>Electronics Repairs</h3>
      <p>
        At Nogatronik Engineering, we know how frustrating it can be when an
        electronic failure interrupts your hobby or project. That is why we
        offer specialized repair services for <strong>RC models</strong> and{" "}
        <strong>electronic systems</strong>, restoring your equipment to full
        functionality with precision and care.
      </p>

      <h3>What We Repair</h3>
      <ul className="list-disc list-inside flex flex-col gap-2">
        <li className="text-secondary">
          <strong>ESCs (Electronic Speed Controllers):</strong> Troubleshooting
          and repair of burned components, faulty solder joints, and power
          issues.
        </li>
        <li className="text-secondary">
          <strong>Receivers & Transmitters:</strong> Diagnosis and restoration
          of connectivity and signal problems.
        </li>
        <li className="text-secondary">
          <strong>Servos:</strong> Mechanical and electronic repair for precise
          and reliable control.
        </li>
        <li className="text-secondary">
          <strong>Flight Controllers:</strong> Calibration, firmware
          reinstallation, and electronic component repairs.
        </li>
      </ul>

      {/* <RequestSteps /> */}

      <div className="relative">
        <hr className="line-break mt-0" />
      </div>

      <h2 className="m-auto">Ready to Start Your Project</h2>
      {session ? (
        <SendProjectReqForm subject={"Electronics Repair"} />
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

export default ElectronicRep;
