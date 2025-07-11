import React from "react";

import ContentLandAnim from "@/components/animations/ContentLandAnim";

const page = () => {
  return (
    <div className="flex-1 min-h-[calc(100vh-105px)] flex flex-col">
      <ContentLandAnim style="flex flex-col gap-5 p-5">
        <h1>Return & Refund Policy</h1>

        <hr className="border-[1px] border-secondary/25 w-full" />

        <small>Last Updated: June 29, 2025</small>

        <ol className="list-decimal list-inside flex flex-col gap-5">
          <li className="font-semibold">
            Return Eligibility
            <p>
              Items must be returned within 30 calendar days of delivery,
              unused, in original packaging, and in a resalable condition.
            </p>
          </li>
          <li className="font-semibold">
            Non-returnable Items
            <ul className="list-disc list-inside ml-5">
              <li>
                <span className="text-sm md:text-base text-secondary">
                  Downloadable software or digital assets
                </span>
              </li>
              <li>
                <span className="text-sm md:text-base text-secondary">
                  Customized or 3D-printed parts
                </span>
              </li>
              <li>
                <span className="text-sm md:text-base text-secondary">
                  Used or tampered electronic products
                </span>
              </li>
              <li>
                <span className="text-sm md:text-base text-secondary">
                  Final sale items
                </span>
              </li>
            </ul>
          </li>
          <li className="font-semibold">
            Refunds
            <p>Refunds are offered in the following cases:</p>
            <ul className="list-disc list-inside ml-5">
              <li>
                Defective or damaged products:
                <p className="ml-5">
                  Items received damaged or defective (must be reported within 7
                  days of delivery).
                </p>
              </li>
              <li>
                Undelivered or incorrectly delivered services:
                <p className="ml-5">
                  The case will be evaluated, and a full or partial refund will
                  be issued if applicable.
                </p>
              </li>
              <li>
                Repairs:
                <p className="ml-5">
                  If a repair cannot be completed due to lack of parts,
                  irreversible damage, or dissatisfaction with the service, a
                  review may be requested. A full or partial refund may be
                  offered, minus diagnostic or labor costs already incurred. No
                  refunds are issued for change of mind or product/service
                  misuse.
                </p>
              </li>
            </ul>
            <p>
              Once the item is returned and inspected, we will notify you of the
              refund status. Approved refunds will be processed within 5 to 10
              business days via the original payment method. Shipping costs are
              non-refundable.
            </p>
          </li>
        </ol>
        <small>
          We may update the Return & Refund Policy. Please review it regularly.
        </small>
      </ContentLandAnim>
    </div>
  );
};

export default page;
