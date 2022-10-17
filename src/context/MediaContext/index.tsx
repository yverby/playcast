import {
  useRef,
  useState,
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
  destroy: () => void;
  ref: RefObject<MediaElement>;
  element: MediaElement | null;
  init: (type: 'audio' | 'video', attributes?: MediaAttributes) => void;
}

export const Media = createContext<MediaContextValue>({
  init: noop,
  destroy: noop,
  element: null,
  ref: createRef(),
});

interface MediaContextProps {
  children: ReactNode;
}

export function MediaContext({ children }: MediaContextProps) {
  const ref = useRef<MediaElement>(null);
  const [element, setElement] = useState<MediaElement | null>(null);

  const init = (type: 'audio' | 'video', attributes?: MediaAttributes) => {
    setElement(
      createElement(type, {
        ...attributes,
        ref,
        onContextMenu: (e) => e.preventDefault(),
      }) as any
    );
  };

  const destroy = () => {
    setElement(null);
  };

  return (
    <Media.Provider value={{ ref, init, destroy, element }}>
      {children}
    </Media.Provider>
  );
}
