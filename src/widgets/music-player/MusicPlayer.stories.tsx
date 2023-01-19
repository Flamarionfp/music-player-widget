import { Meta, StoryObj } from "@storybook/react";
import { usePlayer } from "hooks";
import { MusicPlayerComponent } from "./MusicPlayer";
import { MusicPlayerComponentProps } from "./MusicPlayer.types";

export default {
  title: "widgets/MusicPlayerComponentProps",
  component: MusicPlayerComponent,
  args: {
    trackImagePath: "song-image.png",
    trackName: "Maura",
    artistName: "Manoel Gomes",
    duration: 4000,
    trackUrl: "http://edge.iono.fm/xice/162_medium.aac",
  },
} as Meta<MusicPlayerComponentProps>;

const Template = (props: MusicPlayerComponentProps) => {
  const { trackUrl } = props;
  const { play, pause } = usePlayer(trackUrl);

  return (
    <MusicPlayerComponent {...props} handlePlay={play} handlePause={pause} />
  );
};

export const Normal = Template.bind({});

export const FullResizable: StoryObj = {
  args: {
    variant: "full-resizable",
  },
};

export const HorizontalResizable: StoryObj = {
  args: {
    variant: "horizontal-resizable",
  },
};
