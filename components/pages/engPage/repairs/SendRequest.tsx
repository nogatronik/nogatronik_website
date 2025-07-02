import Image from "next/image";
import Link from "next/link";
import React from "react";

import { RiLoginBoxFill } from "react-icons/ri";

import { authOptions } from "@/lib/auth";

import { CustomSession } from "@/lib/types";
import { getServerSession } from "next-auth";
import { IoMdCreate } from "react-icons/io";

const SendRequest = async () => {
  const session: CustomSession | null = await getServerSession(authOptions);

  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <h1>Ready to Create, Send Us a Request</h1>
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
        <button className="button">
          <IoMdCreate className="icon" />
          <small>create request</small>
        </button>
      ) : (
        <>
          <p>In order to send a request, you need to login</p>
          <Link href={"/login"} className="button">
            <RiLoginBoxFill className="icon" />
            <small>login</small>
          </Link>
        </>
      )}
    </div>
  );
};

export default SendRequest;
