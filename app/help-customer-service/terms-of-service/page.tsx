import ContentLandAnim from "@/components/animations/ContentLandAnim";
import React from "react";

const page = () => {
  return (
    <div className="flex-1 min-h-[calc(100vh-105px)] flex flex-col">
      <ContentLandAnim style="flex flex-col gap-5 p-5">
        <h1>Terms of Service</h1>

        <hr className="border-[1px] border-secondary/25 w-full" />

        <small>Last Updated: June 29, 2025</small>
        <ol className="list-decimal list-inside flex flex-col gap-5">
          <li className="font-semibold">
            Website Use
            <p>
              You agree to use this website lawfully and not for harmful or
              unauthorized purposes.
            </p>
          </li>
          <li className="font-semibold">
            Intellectual Property
            <p>
              All content is owned by Nogatronik Engineering or its creators.
              Unauthorized use or commercial exploitation is prohibited.
            </p>
          </li>
          <li className="font-semibold">
            User Contributions
            <p>
              By submitting content, you grant us permission to use it and
              display it.
            </p>
          </li>
          <li className="font-semibold">
            Purchases and Payments
            <p>
              All transactions are governed by our pricing, payment, and refund
              policies.
            </p>
          </li>
          <li className="font-semibold">
            Limitation of Liability
            <p>
              We are not responsible for damages resulting from the use of our
              site.
            </p>
          </li>
          <li className="font-semibold">
            Termination
            <p>
              We may terminate your access due to violations of these terms.
            </p>
          </li>
        </ol>
        <small>
          We may update the Terms of Service. Please review it regularly.
        </small>
      </ContentLandAnim>
    </div>
  );
};

export default page;
