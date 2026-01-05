import React, {
  startTransition,
  useActionState,
  useEffect,
  useRef,
} from "react";
import { toast } from "sonner";
import { useSession } from "next-auth/react";

import { createProjectReq } from "@/lib/actions/createProjectReqAction";
import { getCaptchaToken } from "@/utils/captcha";
import { ProjectRequest } from "@/lib/types";
import { IoMdCreate } from "react-icons/io";

export const InitialState: ProjectRequest = {
  success: false,
  message: "",
  error: "",
  formInput: {
    subject: "",
    message: "",
  },
};

interface Props {
  subject: string;
}

const SendProjectReqForm = ({ subject }: Props) => {
  const { data: session } = useSession();
  const formRef = useRef<HTMLFormElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [state, formAction, isPending] = useActionState(
    createProjectReq,
    InitialState
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

    const formData = new FormData(e.currentTarget);
    formData.append("subject", subject);

    const recapToken = await getCaptchaToken("project_request");
    formData.append("recapToken", recapToken || "");
    formData.append("userID", session!.userID || "guest");
    startTransition(() => {
      formAction(formData);
    });
  };
  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
      <small>
        <strong>Subject:</strong> {subject}
      </small>
      <small className="font-extrabold">
        Note: The more details you provide, the better we can handle your
        project.
      </small>
      <textarea
        rows={10}
        ref={textareaRef}
        name="projectDescription"
        id="projectDescription"
        placeholder="provide a detailed description of your project requirements..."
        className="p-5 h-fit overflow-hidden"
        // required
        onInput={() => {
          textareaRef.current!.style.height = "auto";
          textareaRef.current!.style.height = `${
            textareaRef.current!.scrollHeight
          }px`;
        }}
        defaultValue={state.formInput.message}
      />
      {isPending ? (
        <small className="mx-auto">pending...</small>
      ) : (
        <button className="button w-full md:w-1/2 mx-auto">
          <IoMdCreate className="icon" />
          <small>Create request</small>
        </button>
      )}
    </form>
  );
};

export default SendProjectReqForm;
