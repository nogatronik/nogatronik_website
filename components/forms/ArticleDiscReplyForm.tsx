import React, { Dispatch, SetStateAction, useRef } from "react";
import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";

interface Props {
  setReplyingTo: Dispatch<SetStateAction<number | null>>;
}

/**
 * @param setReplyingTo - set function of the current article comment that is open
 *
 * This form handles a user's reply to an article comment
 *
 * @returns - JSX
 */
const ArticleDiscReplyForm = ({ setReplyingTo }: Props) => {
  // Variables
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="bg-extra p-2 rounded-md shadow-onRest overflow-hidden"
    >
      <textarea
        ref={textareaRef}
        placeholder="replying to username..."
        rows={1}
        onInput={() => {
          textareaRef.current!.style.height = "auto";
          textareaRef.current!.style.height = `${
            textareaRef.current!.scrollHeight
          }px`;
        }}
        className="flex-1 w-full p-2 h-fit overflow-hidden"
      />
      <div className="flex items-center justify-end gap-5 ">
        <button onClick={() => setReplyingTo(null)} className="group button">
          <FaTrash className="icon" />
          <small className="button-onFailure-child">Cancel</small>
        </button>
        <button className="group button">
          <BsFillSendFill className="icon" />
          <small className="button-onSuccess-child">Comment</small>
        </button>
      </div>
    </motion.div>
  );
};

export default ArticleDiscReplyForm;
