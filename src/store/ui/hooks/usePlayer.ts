import { useContext } from 'react';
import { first, isNumber } from 'lodash';
import { createGlobalState } from 'react-use';

import { Media } from 'src/context';

import type { Source } from 'src/store/podcasts/types';

const defaults = {
  error: false,
  ready: false,
  ended: false,
  playing: false,
  loading: false,
};

const usePlayerStatus = createGlobalState({ ...defaults });

function parseType(type?: string) {
  return (first(type?.split('/')) as 'audio' | 'video') || 'audio';
}

export function usePlayer() {
  const [status, setStatus] = usePlayerStatus();
  const { ref, init, element } = useContext(Media);

  const load = ({ url: src, type }: Source) => {
    setStatus(() => ({ ...defaults, loading: true }));

    const onError = () => setStatus(() => ({ ...defaults, error: true }));
    const onEnded = () => setStatus(() => ({ ...defaults, ended: true }));
    const onPlay = () => setStatus((prev) => ({ ...prev, playing: true }));
    const onPause = () => setStatus((prev) => ({ ...prev, playing: false }));
    const onLoadedData = () => setStatus(() => ({ ...defaults, ready: true }));

    init(parseType(type), {
      src,
      onPlay,
      onPause,
      onEnded,
      onError,
      onLoadedData,
      hidden: true,
      autoPlay: true,
    });
  };

  const play = () => ref.current?.play();
  const pause = () => ref.current?.pause();

  const duration = () => ref.current?.duration || 0;
  const position = () => ref.current?.currentTime || 0;

  const seek = (time: number) => {
    if (isNumber(time) && ref?.current) {
      ref.current.currentTime = time;
    }
  };

  return {
    status,
    media: { ref, element },
    state: { position, duration },
    controls: { load, play, seek, pause },
  };
}
