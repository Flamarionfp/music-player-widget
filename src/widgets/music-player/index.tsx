import { MusicPlayerProps } from "./MusicPlayer.types";
import { MusicPlayerComponent } from "./MusicPlayer";

export const MusicPlayer = (props: MusicPlayerProps) => {
  const { trackUrl } = props;
  const audio = new Audio(trackUrl);

  const handlePlay = () => {
    if (audio.canPlayType("audio/aac")) {
      audio.play();
    }

    audio.play();
  };

  const handlePause = () => {
    audio.pause();
  };

  return (
    <MusicPlayerComponent
      handlePlay={handlePlay}
      handlePause={handlePause}
      {...props}
    />
  );
};
