import SendProjectReqForm from "@/components/forms/SendProjectReqForm";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import { RiLoginBoxFill } from "react-icons/ri";

const Soldering = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const qs = searchParams.toString();
  const callbackUrl = qs ? `${pathname}?${qs}` : pathname;
  return (
    <div className="flex flex-col gap-5">
      <h3>Soldering</h3>
      <p>
        At Nogatronik Engineering, we understand that{" "}
        <strong>soldering is the heart of reliable electronics</strong>. A
        single weak joint can cause performance issues or even complete failure
        in your project. That is why we provide{" "}
        <strong>professional soldering services</strong> tailored to hobbyists,
        RC enthusiasts, and anyone needing precise, durable connections.
      </p>

      <h3>What We Do</h3>
      <p>
        Starting from an existing part, electronic board, or even partial
        documentation, we recreate a <strong>precise digital design</strong>{" "}
        that can be used for:
      </p>
      <ul className="list-disc list-inside flex flex-col gap-2">
        <li className="text-secondary">
          <strong>Component Soldering:</strong> Clean, accurate installation of
          new components on PCBs or assemblies.
        </li>
        <li className="text-secondary">
          <strong>Repairs & Rework:</strong> Expert restoration of broken, cold,
          or faulty solder joints to bring circuits back to life.
        </li>
        <li className="text-secondary">
          <strong>Fine-Pitch & Delicate Work:</strong> Precision soldering for
          microcontrollers, ICs, and sensitive electronic boards.
        </li>
        <li className="text-secondary">
          <strong>Custom Assemblies:</strong> Wiring harnesses, connectors, and
          modular builds, soldered to ensure strength and reliability.
        </li>
        <li className="text-secondary">
          <strong>Upgrades & Modifications:</strong> Add new features, replace
          damaged parts, or improve existing circuits.
        </li>
      </ul>
      <div className="relative">
        <hr className="line-break mt-0" />
      </div>

      <h2 className="m-auto">Ready to Start Your Project</h2>
      {session ? (
        <SendProjectReqForm subject={"Soldering"} />
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

export default Soldering;
