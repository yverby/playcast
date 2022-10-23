import { DRAWER } from 'src/constants';

import type { Episode } from 'src/store/podcasts/types';

export interface DrawerState {
  props: object;
  name: DRAWER | undefined;
}

export interface DrawerActions {
  close: () => void;
  open: (name: DRAWER | undefined, props?: object) => void;
}

export interface PlaylistState {
  queue: Episode[];
}

export interface PlaylistActions {
  add: (episode: Episode) => void;
  next: (episode?: Episode) => void;
  clear: () => void;
}

export interface SidebarState {
  visible: boolean;
}

export interface SidebarActions {
  toggle: (payload?: boolean) => void;
}
