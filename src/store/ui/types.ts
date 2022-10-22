import type { AudioHTMLAttributes, VideoHTMLAttributes } from 'react';

export type MediaElement = HTMLAudioElement | HTMLVideoElement;

export type MediaAttributes =
  | AudioHTMLAttributes<any>
  | VideoHTMLAttributes<any>;
