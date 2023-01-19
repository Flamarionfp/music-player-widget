import { useCallback, useMemo } from 'react';

export const usePlayer = (trackUrl: string) => {
  const audio = useMemo(() => {
    return new Audio(trackUrl);
  }, [trackUrl]);

  const play = useCallback(() => {
    if (audio.canPlayType('audio/aac')) {
      audio.play();
    }
  }, [audio]);

  const pause = useCallback(() => {
    audio.pause();
  }, [audio]);

  return {
    play,
    pause,
  };
};
