import { useCallback } from "react";

export const usePlayer = (trackUrl: string) => {
  const audio = new Audio(trackUrl);

  const play = useCallback(() => {
    if (audio.canPlayType("audio/aac")) {
      audio.play();
    }

    audio.play();
  }, []);

  const pause = useCallback(() => {
    audio.pause();
  }, []);

  return {
    play,
    pause,
  };
};
