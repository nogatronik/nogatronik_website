"use client";

import React, {
  startTransition,
  useActionState,
  useEffect,
  useRef,
} from "react";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import { IoMdCreate } from "react-icons/io";

import { createProjectReq } from "@/lib/actions/createProjectReqAction";
import { getCaptchaToken } from "@/utils/captcha";
import type { CustomSession, ProjectRequestActionState } from "@/lib/types";

export const InitialState: ProjectRequestActionState = {
  success: false,
  message: "",
  error: null,
  formInput: {
    subject: "",
    subtitle: "",
    message: "",
  },
};

interface Props {
  subject: string;
}

const SendProjectReqForm = ({ subject }: Props) => {
  const { data: session } = useSession();
  const typedSession = session as CustomSession | null;

  const formRef = useRef<HTMLFormElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const [state, formAction, isPending] = useActionState(
    createProjectReq,
    InitialState,
  );

  useEffect(() => {
    if (state.success) {
      toast.success("Project Request sent successfully");
      formRef.current?.reset();
    }
    if (state.error) toast.error(state.error);
  }, [state]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // If user isn't logged in, you can still allow it as "guest"
    // (or block it here if you want)
    const userID = typedSession?.userID ?? "guest";

    const formData = new FormData(e.currentTarget);
    formData.append("subject", subject);

    const recapToken = await getCaptchaToken("project_request");
    formData.append("recapToken", recapToken || "");
    formData.append("userID", userID);

    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
      <small>
        <strong>Category:</strong> {subject}
      </small>

      {/* Title row with subtle inline helper */}
      <div className="flex flex-col gap-2">
        <label htmlFor="subtitle">
          <small>
            <strong>Project Title:</strong>
          </small>
        </label>

        <input
          id="subtitle"
          name="subtitle"
          maxLength={50}
          placeholder="USB-C port repair, RC chassis build..."
          className="w-full max-w-sm rounded-md border bg-background px-3 py-2 text-sm"
          defaultValue={state.formInput.subtitle}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <small className="text-xs text-muted-foreground">
          Note: The more details you provide, the better we can handle your
          project.
        </small>

        <textarea
          rows={10}
          ref={textareaRef}
          name="projectDescription"
          id="projectDescription"
          placeholder="Provide a detailed description of your project requirements..."
          className="p-5 h-fit overflow-hidden rounded-md border bg-background text-sm"
          onInput={() => {
            if (!textareaRef.current) return;
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
          }}
          defaultValue={state.formInput.message}
          required
        />
      </div>
      {isPending ? (
        <small className="mx-auto">pending...</small>
      ) : (
        <button type="submit" className="button w-full md:w-1/2 mx-auto">
          <IoMdCreate className="icon" />
          <small>Create request</small>
        </button>
      )}
    </form>
  );
};

export default SendProjectReqForm;
