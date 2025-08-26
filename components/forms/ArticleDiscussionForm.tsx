"use client";

import React, { useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";

/**
 *
 * This form handles a user's article comment posting
 *
 * @returns - JSX
 */
const ArticleDiscussionForm = () => {
  // Variables
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [isTextAreaFocus, setIsTextAreaFocus] = useState(false);

  return (
    <div className="relative flex flex-col gap-2 p-2 bg-extra rounded-md shadow-onRest overflow-hidden">
      <AnimatePresence mode="sync">
        {isTextAreaFocus && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="flex items-center gap-2"
          >
            <div className="rounded-full w-10 h-10 bg-accent"></div>
            <small>Username</small>
          </motion.div>
        )}
      </AnimatePresence>

      <textarea
        rows={1}
        ref={textareaRef}
        placeholder="share your thoughts here..."
        className="w-full p-2 h-fit overflow-hidden"
        onInput={() => {
          textareaRef.current!.style.height = "auto";
          textareaRef.current!.style.height = `${
            textareaRef.current!.scrollHeight
          }px`;
        }}
        // onChange={(e) => setText(e.target.value)}
        onFocus={() => setIsTextAreaFocus(true)}
      />

      <AnimatePresence mode="sync">
        {isTextAreaFocus && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="flex items-center justify-end gap-5"
          >
            <button
              onClick={() => setIsTextAreaFocus(false)}
              className="group button"
            >
              <FaTrash className="icon" />
              <small className="button-onFailure-child">Cancel</small>
            </button>
            <button className="group button">
              <BsFillSendFill className="icon" />
              <small className="button-onSuccess-child">Comment</small>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ArticleDiscussionForm;
