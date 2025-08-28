"use client";

import { createRepairReqAction } from "@/lib/actions/createRepairReqAction";
import React, { useActionState } from "react";
import { IoMdCreate } from "react-icons/io";

const CreateRepairReqForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, action, isPending] = useActionState(createRepairReqAction, {
    success: false,
    message: "",
  });

  return (
    <form action={action} className="flex flex-col gap-5">
      <div id="media-assets" className="grid gap-5 grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col col-span-2">
          <h3>Media</h3>
          <small>
            Please share any images and/or a video to support your request
            (optional).
          </small>
        </div>
        <div className="flex flex-col gap-2 col-span-2 md:col-auto">
          <label htmlFor="upload-img">
            <small>Upload Images (max 5):</small>
          </label>
          <div className="upload-box">
            <small>Click to upload images</small>
          </div>
        </div>

        <div className="flex flex-col gap-2 col-span-2 md:col-auto">
          <label htmlFor="upload-video">
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
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="brand">
            <small>Item&apos;s Brand:</small>
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            placeholder="brand name"
            required
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="model">
            <small>Item&apos;s Model:</small>
          </label>
          <input
            type="text"
            id="model"
            name="model"
            placeholder="model name"
            required
          />
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="model-number">
            <small>Model number:</small>
          </label>
          <input
            type="text"
            id="model-number"
            name="model-number"
            placeholder="model number"
            required
          />
        </div>
      </div>

      <div id="issue-questions" className="grid gap-5 grid-cols-3">
        <div className="flex flex-col gap-2 col-span-3 md:col-span-2">
          <label htmlFor="issue-title">
            <small>Issue Title:</small>
          </label>
          <input
            type="text"
            id="issue-title"
            name="issue-title"
            placeholder="brief title of the issue"
            required
          />
        </div>

        <div className="flex flex-col gap-2 col-span-3 md:col-auto">
          <label htmlFor="issue-date">
            <small>When did the issue start:</small>
          </label>
          <input type="date" id="issue-date" name="issue-date" />
        </div>

        <div className=" flex flex-col gap-2 col-span-3 md:col-auto">
          <label htmlFor="question-previous-work">
            <small>Has the item received any work:</small>
          </label>
          <input
            type="text"
            id="question-previous-work"
            name="question-previous-work"
            placeholder="yes/no. If yes, then who"
            required
          />
        </div>

        <div className=" flex flex-col gap-2 col-span-3 md:col-auto">
          <label htmlFor="question-issue-occcurance">
            <small>Issue Occurance:</small>
          </label>
          <input
            type="text"
            id="question-issue-occcurance"
            name="question-issue-occcurance"
            placeholder="constantly or intermittently"
            required
          />
        </div>

        <div className=" flex flex-col gap-2 col-span-3 md:col-auto">
          <label htmlFor="question-warranty">
            <small>Is the device under warranty:</small>
          </label>
          <input
            type="text"
            id="question-warranty"
            name="question-warranty"
            placeholder="yes or no"
            required
          />
        </div>

        <div className=" flex flex-col gap-2 col-span-3 md:col-span-2">
          <label htmlFor="question-delivery">
            <small>
              Would you want to coordinate an in-person delivery [PMVAC Field -
              McCarty Rd., Eastvale, CA 92880]:
            </small>
          </label>
          <input
            type="text"
            id="question-warranty"
            name="question-warranty"
            placeholder="yes/no. If yes, then provide day and time."
            required
          />
        </div>

        <div className=" flex flex-col gap-2 col-span-3">
          <label htmlFor="question-issue-description">
            <small>Describe the issue in detail:</small>
          </label>
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
            name="question-issue-description"
            id="question-issue-description"
            placeholder="provide a detailed description. Don't forget to include the questions/suggestions from above."
            className="p-5"
            required
          />
        </div>
      </div>
      {isPending ? (
        <small>pending...</small>
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
