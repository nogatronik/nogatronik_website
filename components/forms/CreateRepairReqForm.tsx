"use client";

import React, {
  startTransition,
  useActionState,
  useRef,
  useState,
} from "react";

import { IoMdCreate } from "react-icons/io";

import { RepairRequest } from "@/lib/types";
import { createRepairReq } from "@/lib/actions/createRepairReqAction";
import { repairSchema } from "@/lib/schemas/repairSchema";
// import { getCaptchaToken } from "@/utils/captcha";
import { toast } from "sonner";

export const InitialState: RepairRequest = {
  success: false,
  message: "",
  error: "",
  formInput: {
    uploadImage: null,
    uploadVideo: null,
    brand: "",
    model: "",
    modelNumber: "",
    issueTitle: "",
    issueDate: null,
    previousWork: "",
    issueOcccurance: "",
    warranty: "",
    prefferedDelivery: "",
    preferredContactMethod: "",
    issueDescription: "",
  },
};

const CreateRepairReqForm = () => {
  const [state, formAction, isPending] = useActionState(
    createRepairReq,
    InitialState
  );
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [inputError, setInputError] = useState<Record<string, string[]>>({});

  const handleSubmit = async (formData: FormData) => {
    const zodResult = repairSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
    if (!zodResult.success) {
      const errors: Record<string, string[]> = {};
      zodResult.error.issues.forEach((issue) => {
        const field = String(issue.path[0]);
        if (!field) return;
        if (!errors[field]) errors[field] = [];
        errors[field].push(issue.message);
      });
      setInputError(errors);
      return;
    }

    // const token = await getCaptchaToken("repair-request");
    // formData.append("token", token || "");
    startTransition(() => {
      formAction(formData);
      if (!state.error) toast.success("Repair Request sent successfully");
      else toast.error(state.error);
    });
  };

  return (
    <form action={handleSubmit} className="flex flex-col gap-5">
      <div id="media-assets" className="grid gap-5 grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col col-span-2">
          <h3>Media</h3>
          <small>
            Please share any images and/or a video to support your request
            (optional).
          </small>
        </div>
        <div className="flex flex-col gap-2 col-span-2 md:col-auto">
          <label htmlFor="uploadImage">
            <small>Upload Images (max 5):</small>
          </label>
          <div className="upload-box">
            <small>Click to upload images</small>
          </div>
        </div>

        <div className="flex flex-col gap-2 col-span-2 md:col-auto">
          <label htmlFor="uploadVideo">
            <small>Upload Video (max 2 min):</small>
          </label>
          <div className="upload-box">
            <small>Click to upload video</small>
          </div>
        </div>
      </div>

      <div className="flex flex-col col-span-2">
        <h3>Questions</h3>
        <small>
          Please answer the following questions as accurately as you can. Please
          follow the suggested answers, or if necessary, provide additional
          information.
        </small>
      </div>

      <div id="item-details" className="flex flex-wrap gap-5">
        <label htmlFor="brand" className="flex-1 flex flex-col gap-2">
          <small>Item&apos;s Brand:</small>
          <input
            type="text"
            id="brand"
            name="brand"
            placeholder="brand name"
            // required
            defaultValue={state.formInput.brand}
          />
          {inputError.brand && (
            <small className="text-red-400">{inputError.brand[0]}</small>
          )}
        </label>

        <label htmlFor="model" className="flex-1 flex flex-col gap-2">
          <small>Item&apos;s Model:</small>
          <input
            type="text"
            id="model"
            name="model"
            placeholder="model name"
            // required
            defaultValue={state.formInput.model}
          />
          {inputError.model && (
            <small className="text-red-400">{inputError.model[0]}</small>
          )}
        </label>

        <label htmlFor="modelNumber" className="flex-1 flex flex-col gap-2">
          <small>Model number:</small>
          <input
            type="text"
            id="modelNumber"
            name="modelNumber"
            placeholder="model number"
            // required
            defaultValue={state.formInput.modelNumber}
          />
          {inputError.modelNumber && (
            <small className="text-red-400">{inputError.modelNumber[0]}</small>
          )}
        </label>
      </div>

      <div id="issue-questions" className="grid gap-5 grid-cols-3">
        <label
          htmlFor="issueTitle"
          className="flex flex-col gap-2 col-span-3 md:col-span-2"
        >
          <small>Issue Title:</small>
          <input
            type="text"
            id="issueTitle"
            name="issueTitle"
            placeholder="brief title of the issue"
            // required
            defaultValue={state.formInput.issueTitle}
          />
          {inputError.issueTitle && (
            <small className="text-red-400">{inputError.issueTitle[0]}</small>
          )}
        </label>

        <label
          htmlFor="issueDate"
          className="flex flex-col gap-2 col-span-3 md:col-auto"
        >
          <small>When did the issue start:</small>
          <input
            type="date"
            id="issueDate"
            name="issueDate"
            defaultValue={
              state.formInput.issueDate
                ? state.formInput.issueDate.toISOString().split("T")[0]
                : undefined
            }
          />
          {inputError.issueDate && (
            <small className="text-red-400">{inputError.issueDate[0]}</small>
          )}
        </label>

        <label
          htmlFor="previousWork"
          className=" flex flex-col gap-2 col-span-3 md:col-auto"
        >
          <small>Has the item received any work:</small>
          <input
            type="text"
            id="previousWork"
            name="previousWork"
            placeholder="yes/no. If yes, then who"
            // required
            defaultValue={state.formInput.previousWork}
          />
          {inputError.previousWork && (
            <small className="text-red-400">{inputError.previousWork[0]}</small>
          )}
        </label>

        <label
          htmlFor="issueOcccurance"
          className=" flex flex-col gap-2 col-span-3 md:col-auto"
        >
          <small>Issue Occurance:</small>
          <input
            type="text"
            id="issueOcccurance"
            name="issueOcccurance"
            placeholder="constantly or intermittently"
            // required
            defaultValue={state.formInput.issueOcccurance}
          />
          {inputError.issueOcccurance && (
            <small className="text-red-400">
              {inputError.issueOcccurance[0]}
            </small>
          )}
        </label>

        <label
          htmlFor="warranty"
          className=" flex flex-col gap-2 col-span-3 md:col-auto"
        >
          <small>Is the device under warranty:</small>
          <input
            type="text"
            id="warranty"
            name="warranty"
            placeholder="yes or no"
            // required
            defaultValue={state.formInput.warranty}
          />
          {inputError.warranty && (
            <small className="text-red-400">{inputError.warranty[0]}</small>
          )}
        </label>

        <label
          htmlFor="prefferedDelivery"
          className=" flex flex-col gap-2 col-span-3 md:col-span-2"
        >
          <small>
            Would you want to coordinate an in-person delivery [PMVAC Field -
            McCarty Rd., Eastvale, CA 92880]:
          </small>
          <input
            type="text"
            id="prefferedDelivery"
            name="prefferedDelivery"
            placeholder="yes/no. If yes, then provide day and time."
            // required
            defaultValue={state.formInput.prefferedDelivery}
          />
          {inputError.prefferedDelivery && (
            <small className="text-red-400">
              {inputError.prefferedDelivery[0]}
            </small>
          )}
        </label>

        <label
          htmlFor="preferredContactMethod"
          className=" flex flex-col gap-2 col-span-3 md:col-auto"
        >
          <small>Preferred Contact Method:</small>
          <input
            type="text"
            id="preferredContactMethod"
            name="preferredContactMethod"
            placeholder="provide phone or email"
            // required
            defaultValue={state.formInput.preferredContactMethod}
          />
          {inputError.preferredContactMethod && (
            <small className="text-red-400">
              {inputError.preferredContactMethod[0]}
            </small>
          )}
        </label>

        <label
          htmlFor="issueDescription"
          className=" flex flex-col gap-2 col-span-3"
        >
          <small>Describe the issue in detail:</small>
          <div className="ml-2">
            <small className="font-extrabold">
              Note: Please go over these questions/suggestions in your
              description. The more details you provide, the better we can
              handle your repair.
            </small>
            <ul className="list-disc list-inside">
              <li>
                <small>
                  Does the device have any data or configuration, how should it
                  be handled?
                </small>
              </li>
              <li>
                <small>
                  Is the issue occuring after an especific action/event?
                </small>
              </li>
              <li>
                <small>
                  Please provide all symptoms or observations you have that may
                  relate to the issue.
                </small>
              </li>
            </ul>
          </div>

          <textarea
            rows={1}
            ref={textareaRef}
            name="issueDescription"
            id="issueDescription"
            placeholder="provide a detailed description. Don't forget to include the questions/suggestions from above."
            className="p-5 h-fit overflow-hidden"
            // required
            onInput={() => {
              textareaRef.current!.style.height = "auto";
              textareaRef.current!.style.height = `${
                textareaRef.current!.scrollHeight
              }px`;
            }}
            defaultValue={state.formInput.issueDescription}
          />
          {inputError.issueDescription && (
            <small className="text-red-400">
              {inputError.issueDescription[0]}
            </small>
          )}
        </label>
      </div>

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

export default CreateRepairReqForm;
