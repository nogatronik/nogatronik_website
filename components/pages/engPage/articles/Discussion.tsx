import React from "react";
import Link from "next/link";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

import { CustomSession } from "@/lib/types";

import { RiLoginBoxFill } from "react-icons/ri";

import DiscussionList from "./DiscussionList";
import ArticleDiscussionForm from "@/components/forms/ArticleDiscussionForm";

/**
 *
 * This component displays the Discussion portion of an article endpoint
 *
 * @returns JSX
 */
const Discussion = async () => {
  const session: CustomSession | null = await getServerSession(authOptions);

  return (
    <div className=" flex flex-col gap-5 mx-auto w-full max-w-[680px]">
      <h3 className="text-secondary/75">Discussions</h3>

      {session ? (
        <ArticleDiscussionForm />
      ) : (
        <div className="flex flex-col gap-2 items-center justify-center">
          <p className="font-semibold ">Want to share ideas</p>
          <Link href={"/login"} className="button">
            <RiLoginBoxFill className="icon" />
            <small className="text-sm">login</small>
          </Link>
        </div>
      )}
      <hr className="border-[1px] border-secondary/15 w-full" />
      <DiscussionList />
    </div>
  );
};

export default Discussion;
