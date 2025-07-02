"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

import { AiFillLike } from "react-icons/ai";
import { FaSave } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";

/**
 *
 * This component displays the actions of the article
 *
 * @returns JSX
 */
const ArticleActions = () => {
  // Variables
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="flex items-center gap-5">
      <button
        onClick={() => {
          if (session) return;
          else router.push("/login");
        }}
        className=" cursor-pointer group flex items-center gap-1"
      >
        <AiFillLike className="icon group-hover:text-primary anim-transition" />
        <small>50</small>
      </button>
      <button
        onClick={() => {
          if (session) return;
          else router.push("/login");
        }}
        className=" cursor-pointer group"
      >
        <RiShareBoxLine className="icon group-hover:text-primary anim-transition" />
      </button>
      <button
        onClick={() => {
          if (session) return;
          else router.push("/login");
        }}
        className=" cursor-pointer group"
      >
        <FaSave className="icon group-hover:text-primary anim-transition" />
      </button>
    </div>
  );
};

export default ArticleActions;
