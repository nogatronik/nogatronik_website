import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { RiLoginBoxFill } from "react-icons/ri";
import { IoMdCreate } from "react-icons/io";

const StartRequest = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <h3>Send Us a Repair Request</h3>
      <Image
        src={"/helpers/repair_request_img.svg"}
        height={350}
        width={350}
        alt="send us your package"
        priority
        quality={100}
        className="drop-shadow-md w-[250px] md:w-[350px] h-auto"
      />
      {session ? (
        <Link href={"/engineering/projects/create-request"} className="button">
          <IoMdCreate className="icon" />
          <small>Start request</small>
        </Link>
      ) : (
        <>
          <p>In order to send a request, you need to login</p>
          <Link href={"/login"} className="button">
            <RiLoginBoxFill className="icon" />
            <small>Login</small>
          </Link>
        </>
      )}
    </div>
  );
};

export default StartRequest;
