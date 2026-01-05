import React from "react";
import { REPAIR_STEPS } from "@/utils/serviceList";

const RequestSteps = () => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-center">Repair Steps</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:w-[75%] mx-auto">
        {REPAIR_STEPS.map((step, index) => (
          <div
            key={index}
            className="group flex flex-col gap-2 rounded-md bg-muted shadow-onRest"
          >
            <h3 className="bg-accent text-secondary rounded-t-md p-2 shadow-sm">
              Step {index + 1}
            </h3>
            <step.image className="icon text-[75px] md:text-[125px] mx-auto mt-2 drop-shadow-sm" />
            <p className="text-center p-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequestSteps;
