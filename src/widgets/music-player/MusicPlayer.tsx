import { PlayerControll, ProgressTracker, TrackInfo } from 'components';
import { MusicPlayerComponentProps } from './MusicPlayer.types';
import { omit } from 'radash';
export const MusicPlayerComponent = (props: MusicPlayerComponentProps) => {
  const { variant = 'normal', color, handlePlay = () => null } = props;

  const trackInfoProps = omit(props, ['duration', 'trackUrl', 'handlePlay', 'handlePause']);

  function getContainerStyle() {
    if (variant === 'horizontal-resizable') {
      return 'w-[357px] p-7 resize flex flex-col items-center justify-center';
    } else if (variant === 'full-resizable') {
      return 'w-[266px] px-10 py-12 resize-x';
    }

    return 'px-10 py-12';
  }

  return (
    <div
      style={{ backgroundColor: color }}
      className={`min-w-[266px] min-h-[266px] overflow-hidden rounded-lg ${getContainerStyle()}`}
    >
      <TrackInfo variant={variant} {...trackInfoProps} />
      <section className="my-7">
        <PlayerControll onPlayClick={handlePlay} isPlaying={false} />
      </section>
      <ProgressTracker />
    </div>
  );
};
