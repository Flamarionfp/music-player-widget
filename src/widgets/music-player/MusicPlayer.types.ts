type Variant = "normal" | "compact";

export type MusicPlayerProps = {
  variant?: Variant;
  trackImagePath: string;
  trackUrl: string;
  trackName: string;
  artistName: string;
  duration: number;
};
