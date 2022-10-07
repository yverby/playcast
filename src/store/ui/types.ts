import type { Howl } from 'howler';

import { DRAWER } from 'src/constants';

export interface Player {
  audio: Howl | null;
  error: Error | null;
  status: {
    ended: boolean;
    ready: boolean;
    loading: boolean;
    playing: boolean;
  };
}

export interface DrawerParams {
  name?: DRAWER;
  props?: object;
}
