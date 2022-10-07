import { useMemo, useCallback } from 'react';
import { Howl } from 'howler';
import { noop, isNumber } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

import type { HowlOptions } from 'howler';

import { uiActions } from 'src/store/ui/actions';
import {
  selectUiPlayerAudio,
  selectUiPlayerStatus,
} from 'src/store/ui/selectors';

export function usePlayer() {
  const dispatch = useDispatch();

  const audio = useSelector(selectUiPlayerAudio);
  const status = useSelector(selectUiPlayerStatus);

  const load = useCallback(
    (options: HowlOptions) => {
      if (audio instanceof Howl) {
        audio.unload();
      }

      dispatch(uiActions.player.start());

      const howl = new Howl({ html5: true, autoplay: true, ...options });

      howl.on('load', () => dispatch(uiActions.player.load(howl)));
      howl.on('end', () => dispatch(uiActions.player.end()));
      howl.on('play', () => dispatch(uiActions.player.play()));
      howl.on('pause', () => dispatch(uiActions.player.pause()));
    },
    [audio]
  );

  const handlers = useMemo(
    () => ({
      play: audio ? audio.play.bind(audio) : noop,
      pause: audio ? audio.pause.bind(audio) : noop,
      duration: () => (audio ? Math.round(audio.duration()) : 0),
      seek: (time?: number) => {
        if (audio && isNumber(time)) audio.seek(time);
        return audio ? Math.round(audio.seek()) : 0;
      },
    }),
    [audio]
  );

  return useMemo(
    () => ({ ...handlers, load, status }),
    [load, status, handlers]
  );
}
