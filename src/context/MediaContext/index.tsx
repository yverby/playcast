import {
  useRef,
  useState,
  useCallback,
  createRef,
  createContext,
  createElement,
} from 'react';
import { noop } from 'lodash';

import type {
  ReactNode,
  RefObject,
  AudioHTMLAttributes,
  VideoHTMLAttributes,
} from 'react';

export type MediaElement = HTMLAudioElement | HTMLVideoElement;
export type MediaAttributes =
  | AudioHTMLAttributes<any>
  | VideoHTMLAttributes<any>;

interface MediaContextValue {
  ref: RefObject<MediaElement>;
  element: MediaElement | null;
  init: (type: 'audio' | 'video', attributes?: MediaAttributes) => void;
}

export const Media = createContext<MediaContextValue>({
  init: noop,
  element: null,
  ref: createRef(),
});

interface MediaContextProps {
  children: ReactNode;
}

export function MediaContext({ children }: MediaContextProps) {
  const ref = useRef<MediaElement>(null);
  const [element, setElement] = useState<MediaContextValue['element']>(null);

  const init = useCallback<MediaContextValue['init']>((type, attributes) => {
    setElement(
      createElement(type, {
        ...attributes,
        ref,
        onContextMenu: (e) => e.preventDefault(),
      }) as any
    );
  }, []);

  return (
    <Media.Provider value={{ ref, init, element }}>{children}</Media.Provider>
  );
}
