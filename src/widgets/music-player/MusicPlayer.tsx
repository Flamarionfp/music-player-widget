import { PlayerControll, ProgressTracker, TrackInfo } from "components";
import { MusicPlayerProps } from "./MusicPlayer.types";
import { omit, pick } from "radash";
import { NORMAL_VARIANT } from "constants";

export const MusicPlayer = (props: MusicPlayerProps) => {
  const { variant = "normal" } = props;

  const trackInfoProps = omit(props, ["duration", "trackUrl"]);
  const progressTrackerProps = pick(props, ["duration"]);

  const containerStyle =
    variant === NORMAL_VARIANT ? "w-[357px] p-7" : "w-[266px] px-10 py-12";

  return (
    <div className={`bg-primary-500 w-[266px] rounded-lg ${containerStyle}`}>
      <TrackInfo variant={variant} {...trackInfoProps} />
      <section className="my-7">
        <PlayerControll isPlaying={false} />
      </section>
      <ProgressTracker {...progressTrackerProps} />
    </div>
  );
};
