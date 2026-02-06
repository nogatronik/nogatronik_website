import SendProjectReqForm from "@/components/forms/SendProjectReqForm";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { RiLoginBoxFill } from "react-icons/ri";

const PrintDesign = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col gap-5">
      <h3>3D Print Design</h3>
      <p>
        We work with advanced CAD modeling, precision slicing, and a wide range
        of materials to ensure durability, detail, and performance. From RC
        aircraft accessories to personalized gadgets, we turn imagination into
        reality.
      </p>

      <h3>What To Expect</h3>
      <ul className="list-disc list-inside flex flex-col gap-2">
        <li className="text-secondary">Professional, customized 3D models.</li>
        <li className="text-secondary">
          Prototypes ready for testing and iteration.
        </li>
        <li className="text-secondary">Strong and reliable final products.</li>
      </ul>

      <div className="relative">
        <hr className="line-break mt-0" />
      </div>

      <h2 className="m-auto">Ready to Start Your Project</h2>
      {session ? (
        <SendProjectReqForm subject={"3D Print Design"} />
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

export default PrintDesign;
