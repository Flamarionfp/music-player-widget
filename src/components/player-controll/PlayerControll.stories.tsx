import { Meta, StoryObj } from "@storybook/react";
import { PlayerControll } from "./PlayerControll";
import { PlayerControllProps } from "./PlayerControll.types";

export default {
  title: "components/PlayerControll",
  component: PlayerControll,
  args: {
    isPlaying: false,
    onPlayClick: () => {},
  },
} as Meta<PlayerControllProps>;

export const Default: StoryObj = {};
