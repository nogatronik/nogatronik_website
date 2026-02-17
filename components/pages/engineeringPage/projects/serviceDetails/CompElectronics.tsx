import SendProjectReqForm from "@/components/forms/SendProjectReqForm";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import { RiLoginBoxFill } from "react-icons/ri";

const CompElectronics = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const qs = searchParams.toString();
  const callbackUrl = qs ? `${pathname}?${qs}` : pathname;
  console.log("callbackUrl:", callbackUrl);
  return (
    <div className="flex flex-col gap-5">
      <h3>Advanced Computer & Electronics</h3>
      <p>
        At Nogatronik Engineering, we deliver{" "}
        <strong>engineering-level diagnostics</strong> grounded in precision—not
        guesswork—while prioritizing{" "}
        <strong>repair over unnecessary replacement</strong>. With proven
        experience in{" "}
        <strong>electronics, automation, and embedded systems</strong>, we
        provide <strong>clear technical communication</strong> and thorough
        documentation, along with <strong>personalized service</strong> for
        complex or non-standard cases. Our work is ideal for{" "}
        <strong>engineers and makers</strong>, <strong>small businesses</strong>
        , <strong>legacy hardware owners</strong>,{" "}
        <strong>custom electronics users</strong>,{" "}
        <strong>technical hobbyists</strong>, and clients seeking{" "}
        <strong>reliable, long-term solutions</strong>.
      </p>

      <h3>What We Offer</h3>
      <ul className="list-disc list-inside flex flex-col gap-2">
        <p className="font-semibold text-xl">Computer Repair & Upgrades:</p>
        <small className="font-medium opacity-85">
          We provide complete diagnostics, repair, and upgrade services for
          laptops and desktop computers, including:
        </small>
        <li className="text-secondary">
          Hardware diagnostics and troubleshooting.
        </li>
        <li className="text-secondary">Laptop and desktop repair.</li>
        <li className="text-secondary">SSD and NVMe upgrades.</li>
        <li className="text-secondary">
          RAM upgrades and performance optimization.
        </li>
        <li className="text-secondary">Power supply replacement.</li>
        <li className="text-secondary">
          Cooling system repair (fans, thermal paste, overheating issues).
        </li>
        <li className="text-secondary">
          Motherboard-level troubleshooting BIOS / firmware updates.
        </li>
        <li className="text-secondary">
          Operating system installation and recovery (Windows, Linux).
        </li>
      </ul>

      <ul className="list-disc list-inside flex flex-col gap-2">
        <p className="font-semibold text-xl">
          Electronic Repair (Component-Level):
        </p>
        <small className="font-medium opacity-85">
          Unlike standard repair shops, Nogatronik Engineering offers true
          electronic repair, not just part replacement. This service is ideal
          for engineering hardware, custom electronics, and devices no longer
          supported by manufacturers.
        </small>
        <li className="text-secondary">Board-level electronic diagnostics.</li>
        <li className="text-secondary">
          Repair of damaged circuits and connectors.
        </li>
        <li className="text-secondary">
          Power regulation and charging circuit repair USB, HDMI, and power jack
          repair.
        </li>
        <li className="text-secondary">Signal and continuity testing.</li>
        <li className="text-secondary">
          Soldering and micro-soldering services.
        </li>
        <li className="text-secondary">
          Repair of custom or legacy electronic boards.
        </li>
      </ul>

      <ul className="list-disc list-inside flex flex-col gap-2">
        <p className="font-semibold text-xl">
          Programming & Configuration Services:
        </p>
        <small className="font-medium opacity-85">
          We also provide software and programming services tailored to hardware
          and automation needs:
        </small>
        <li className="text-secondary">
          System configuration and optimization.
        </li>
        <li className="text-secondary">
          Embedded programming support (microcontrollers & controllers).
        </li>
        <li className="text-secondary">Firmware flashing and configuration.</li>
        <li className="text-secondary">
          Automation scripts and technical utilities.
        </li>
        <li className="text-secondary">Diagnostic and test software setup.</li>
        <li className="text-secondary">
          Custom technical solutions for engineering projects.
        </li>
      </ul>

      <div className="relative">
        <hr className="line-break mt-0" />
      </div>

      <h2 className="m-auto">Ready to Start Your Project</h2>
      {session ? (
        <SendProjectReqForm subject={"Adv. Computer & Electronics"} />
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

export default CompElectronics;
