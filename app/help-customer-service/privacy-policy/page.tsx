import ContentLandAnim from "@/components/animations/ContentLandAnim";
import React from "react";

const page = () => {
  return (
    <div className="flex-1 min-h-[calc(100vh-105px)] flex flex-col">
      <ContentLandAnim style="flex flex-col gap-5 p-5">
        <h1>Privacy Policy</h1>

        <hr className="border-[1px] border-secondary/25 w-full" />

        <small>Last Updated: June 29, 2025</small>
        <ol className="list-decimal list-inside flex flex-col gap-5">
          <li className="font-semibold">
            Information We Collect
            <p>
              We may collect personally identifiable information, technical
              data, usage data, and any voluntary information you share with us.
            </p>
          </li>
          <li className="font-semibold">
            How We Use Your Information
            <p>
              To provide and improve our services, process transactions, send
              updates, respond to inquiries, and analyze site usage.
            </p>
          </li>
          <li className="font-semibold">
            Sharing Your Information
            <p>
              We do not sell your data. We may share it with trusted third
              parties or legal authorities when necessary and with your
              approval.
            </p>
          </li>
          <li className="font-semibold">
            Third-Party Links
            <p>
              We are not responsible for the privacy practices of third-party
              websites linked from our site.
            </p>
          </li>
        </ol>
        <small>We may update this Privacy Policy. Please review it regularly.</small>
      </ContentLandAnim>
    </div>
  );
};

export default page;
