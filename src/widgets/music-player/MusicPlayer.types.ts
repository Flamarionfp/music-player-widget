import { Variant } from 'types';

export type MusicPlayerProps = {
  color?: string;
  variant?: Variant;
  trackImagePath: string;
  trackUrl: string;
  trackName: string;
  artistName: string;
  duration: number;
};

export interface MusicPlayerComponentProps extends MusicPlayerProps {
  handlePlay: () => void;
  handlePause: () => void;
}
