import type {
  RefObject,
  AudioHTMLAttributes,
  VideoHTMLAttributes,
} from 'react';

export type MediaElement = HTMLAudioElement | HTMLVideoElement;

export type MediaAttributes =
  | AudioHTMLAttributes<any>
  | VideoHTMLAttributes<any>;

export interface MediaState {
  element: MediaElement | undefined;
  ref: RefObject<MediaElement | undefined>;
}

export interface MediaActions {
  setup: (type: 'audio' | 'video', attrs?: MediaAttributes) => void;
  reset: () => void;
}

export interface StatusState {
  error: boolean;
  ready: boolean;
  ended: boolean;
  loading: boolean;
  playing: boolean;
}

export interface StatusActions {
  set: (status: Partial<StatusState>, reset?: boolean) => void;
}
