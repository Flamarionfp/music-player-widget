import { Variant } from "types";

export type MusicPlayerProps = {
  variant?: Variant;
  trackImagePath: string;
  trackUrl: string;
  trackName: string;
  artistName: string;
  duration: number;
};
