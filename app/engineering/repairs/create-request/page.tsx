import React from "react";

import ContentLandAnim from "@/components/animations/ContentLandAnim";
import { IoMdCreate } from "react-icons/io";

const CreateRequestPage = () => {
  return (
    <main className="min-h-[calc(100vh-105px)] w-full max-w-7xl mx-auto p-5 flex flex-col">
      <ContentLandAnim style="w-full flex flex-col gap-5">
        <h1>Create a Repair Request</h1>

        {/* Form */}
        <form className="flex flex-col gap-5">
          <div
            id="media-assets"
            className="grid gap-5 grid-cols-1 md:grid-cols-2"
          >
            <div className="flex flex-col col-span-2">
              <h3>Media</h3>
              <small>
                please share any images and/or a video to support your request
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
                      Does the device have any data or configuration, how should
                      it be handled?
                    </small>
                  </li>
                  <li>
                    <small>
                      Is the issue occuring after an especific action/event?
                    </small>
                  </li>
                  <li>
                    <small>
                      Please provide all symptoms or observations you have that
                      may relate to the issue.
                    </small>
                  </li>
                </ul>
              </div>
              <textarea
                name="question-issue-description"
                id="question-issue-description"
                placeholder="provide a detailed description. Don't forget to include the questions/suggestions from above."
                className="p-5"
              />
            </div>
          </div>

          <button className="button w-full md:w-1/2 mx-auto">
            <IoMdCreate className="icon" />
            <small>Create request</small>
          </button>
        </form>
        {/* Form */}
      </ContentLandAnim>
    </main>
  );
};

export default CreateRequestPage;
