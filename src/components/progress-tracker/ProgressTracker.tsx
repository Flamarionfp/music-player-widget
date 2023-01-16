import { HORIZONTAL_RESIZABLE } from "constants";
import React from "react";
import { ProgressTrackerProps } from "./ProgressTracker.types";

export const ProgressTracker = (props: ProgressTrackerProps) => {
  return (
    <React.Fragment>
      <div className="w-full bg-gray-200 rounded-full h-1.5">
        <div className="w-[40%] bg-blue-500 h-1.5 rounded-full" />
      </div>
      <section className="flex justify-between w-full mt-2.5">
        <span className="text-xs text-gray-400">0:00</span>
        <span className="text-xs text-gray-400">3:00</span>
      </section>
    </React.Fragment>
  );
};
