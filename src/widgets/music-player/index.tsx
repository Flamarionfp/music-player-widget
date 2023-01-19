import { MusicPlayerProps } from "./MusicPlayer.types";
import { MusicPlayerComponent } from "./MusicPlayer";
import { usePlayer } from "hooks";

export const MusicPlayer = (props: MusicPlayerProps) => {
  const { trackUrl } = props;
  const { play, pause } = usePlayer(trackUrl);

  return (
    <MusicPlayerComponent handlePlay={play} handlePause={pause} {...props} />
  );
};
