import { PlayerControll, ProgressTracker, TrackInfo } from "components";
import { MusicPlayerComponentProps } from "./MusicPlayer.types";
import { omit } from "radash";

export const MusicPlayerComponent = (props: MusicPlayerComponentProps) => {
  const { variant = "normal", duration, handlePlay = () => null } = props;

  const trackInfoProps = omit(props, [
    "duration",
    "trackUrl",
    "handlePlay",
    "handlePause",
  ]);

  const progressTrackerProps = {
    duration,
  };

  function getContainerStyle() {
    if (variant === "horizontal-resizable") {
      return "w-[357px] p-7 resize flex flex-col items-center justify-center";
    } else if (variant === "full-resizable") {
      return "w-[266px] px-10 py-12 resize-x";
    }

    return "px-10 py-12";
  }

  return (
    <div
      className={`min-w-[266px] min-h-[266px] overflow-hidden bg-primary-500 rounded-lg ${getContainerStyle()}`}
    >
      <TrackInfo variant={variant} {...trackInfoProps} />
      <section className="my-7">
        <PlayerControll onPlayClick={handlePlay} isPlaying={false} />
      </section>
      <ProgressTracker {...progressTrackerProps} />
    </div>
  );
};
