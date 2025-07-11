import React from "react";

import ContentLandAnim from "@/components/animations/ContentLandAnim";

const page = () => {
  return (
    <div className="flex-1 min-h-[calc(100vh-105px)] flex flex-col">
      <ContentLandAnim style="flex flex-col gap-5 p-5">
        <h1>Shipping & Delivery</h1>

        <hr className="border-[1px] border-secondary/25 w-full" />

        <small>Last Updated: June 29, 2025</small>

        <ol className="list-decimal list-inside flex flex-col gap-5">
          <li className="font-semibold">
            Shipping Locations
            <p>
              We currently ship only within the United States. Orders placed
              from international addresses will be automatically canceled and
              refunded.
            </p>
          </li>
          <li className="font-semibold">
            Processing Time
            <p>
              <span className="font-extrabold underline">Store Orders:</span>{" "}
              Typically processed within 1–3 business days after full payment is
              received. Orders placed on weekends or holidays will be processed
              the next business day. During high-demand periods (e.g., product
              launches or promotions), processing may take up to 5 business
              days.
            </p>
            <p>
              <span className="font-extrabold underline">Repair Orders:</span>{" "}
              Typically processed within 1–3 business days after payment for
              diagnostics is received. Orders placed on weekends or holidays
              will be processed the next business day. During peak times,
              processing may take up to 5 business days.
            </p>
          </li>
          <li className="font-semibold">
            Shipping Methods
            <p>
              Currently, we do not provide shipping methods. Clients are
              responsible for both the initial shipment, and the return shipment
              after service is completed.
            </p>
          </li>
          <li className="font-semibold">
            Local Delivery or Pickup
            <p>
              We offer local delivery or in-person pickup. To arrange local
              pickup or delivery, contact us in advance at
              solutions@nogatronik.com to confirm availability and make
              arrangements.
            </p>
            <p>
              In-person delivery/pickup is available at PMVAC Field on Sunday
              mornings. Pickup Address: McCarty Rd., Eastvale, CA 92880
            </p>
          </li>
          <li className="font-semibold">
            Shipping Delays
            <p>
              Nogatronik Engineering is not responsible for delays caused by
              weather, courier issues, or incorrect shipping information. If you
              suspect a lost or delayed package, contact us at
              solutions@nogatronik.com within 7 days of the expected delivery
              date.
            </p>
          </li>
          <li className="font-semibold">
            Undelivered or Returned Packages
            <p>
              Packages returned due to incorrect addresses or refusal will incur
              additional shipping fees.
            </p>
          </li>
        </ol>
        <small>
          We may update the Shipping & Delivery. Please review it regularly.
        </small>
      </ContentLandAnim>
    </div>
  );
};

export default page;
