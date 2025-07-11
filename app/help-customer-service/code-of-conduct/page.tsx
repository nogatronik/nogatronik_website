import ContentLandAnim from "@/components/animations/ContentLandAnim";
import React from "react";

const page = () => {
  return (
    <div className="flex-1 min-h-[calc(100vh-105px)] flex flex-col">
      <ContentLandAnim style="flex flex-col gap-5 p-5">
        <h1>Code of Conduct</h1>

        <hr className="border-[1px] border-secondary/25 w-full" />
        <small>Last Updated: June 29, 2025</small>
        <ol className="list-decimal list-inside flex flex-col gap-5">
          <li className="font-semibold">
            Be Respectful
            <p>
              Treat others with courtesy. Abusive or offensive language is not
              allowed.
            </p>
          </li>
          <li className="font-semibold">
            Share Knowledge
            <p>Contribute to a culture of learning and mutual support.</p>
          </li>
          <li className="font-semibold">
            Respect Intellectual Property
            <p>
              Do not plagiarize or violate copyrights. Credit original creators.
            </p>
          </li>
          <li className="font-semibold">
            Stay On Topic
            <p>Use appropriate channels. Avoid spam or irrelevant content.</p>
          </li>
          <li className="font-semibold">
            Report Violations
            <p>Report inappropriate behavior to solutions@nogatronik.com.</p>
          </li>
        </ol>
        <small>
          We may update the Code of Conduct. Please review it regularly.
        </small>
      </ContentLandAnim>
    </div>
  );
};

export default page;
