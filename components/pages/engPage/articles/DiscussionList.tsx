"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { AnimatePresence } from "framer-motion";

import { MdMoreHoriz } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { IoChatbox } from "react-icons/io5";

import ArticleDiscReplyForm from "@/components/forms/ArticleDiscReplyForm";


/**
 *
 * This component displays the comments of an article 
 *
 * @returns JSX
 */
const DiscussionList = () => {
  // Variables
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2">
      {[1, 2, 3, 4, 5].map((index) => (
        <div
          className="flex flex-col gap-2 my-3 p-2 border-b border-primary/25"
          key={index}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <div className="rounded-full w-10 h-10 bg-accent"></div>
              <div className="flex flex-col gap-1">
                <small>Username</small>
                <small>Feb 19, 2025</small>
              </div>
            </div>
            <button className="cursor-pointer group">
              <MdMoreHoriz className="icon group-hover:text-primary anim-transition" />
            </button>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            eligendi dolor architecto consequatur, qui ut alias dolorem.
            Deleniti vitae dolorem illum molestiae sapiente. At pariatur sunt
            iure officia facere voluptas minus sequi voluptate, incidunt,
            deleniti ea hic, numquam ratione rerum minima accusantium magnam
            saepe. Accusamus sint consequatur sit exercitationem nulla.
          </p>
          <div className="flex items-center justify-between gap-5">
            <button
              onClick={() => {
                if (session) return;
                else router.push("/login");
              }}
              className="cursor-pointer group flex items-center gap-1"
            >
              <AiFillLike className="icon group-hover:text-primary anim-transition" />
              <small>50</small>
            </button>

            <div className="flex items-end gap-5">
              <button className="cursor-pointer group flex items-center gap-1">
                <IoChatbox className="icon group-hover:text-primary anim-transition" />
                <small>10</small>
              </button>
              <button
                onClick={() => {
                  if (session)
                    setReplyingTo(replyingTo === index ? null : index);
                  else router.push("/login");
                }}
                className="cursor-pointer group"
              >
                <small className="group-hover:text-primary anim-transition">
                  reply
                </small>
              </button>
            </div>
          </div>

          <AnimatePresence mode="popLayout">
            {replyingTo === index && (
              <ArticleDiscReplyForm setReplyingTo={setReplyingTo} />
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default DiscussionList;
