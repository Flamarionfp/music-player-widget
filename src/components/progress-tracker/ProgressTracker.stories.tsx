import { Meta, StoryObj } from "@storybook/react";
import { ProgressTracker } from "./ProgressTracker";
import { ProgressTrackerProps } from "./ProgressTracker.types";

export default {
  title: "components/ProgressTracker",
  component: ProgressTracker,
  args: {
    duration: 3000,
  },
} as Meta<ProgressTrackerProps>;

export const Default: StoryObj = {};
