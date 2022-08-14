import { useRef, useEffect, Children } from 'react';

import type { ReactNode } from 'react';

interface InfiniteScrollProps {
  loading: boolean;
  hasMore: boolean;
  children: ReactNode;
  loadMore: (offset: number) => void;
}

export function InfiniteList({
  loading,
  hasMore,
  loadMore,
  children,
}: InfiniteScrollProps) {
  const visible = !loading && hasMore;
  const offset = Children.count(children);

  const load = useRef<() => void>();
  const element = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver>();

  load.current = () => {
    visible && loadMore(offset);
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(([target]) => {
      target.isIntersecting && load?.current?.();
    });
  }, []);

  useEffect(() => {
    element.current && observer.current?.observe(element.current);
    return () => observer.current?.disconnect();
  }, [visible]);

  return (
    <>
      {children}
      {visible && <div ref={element} style={{ height: 1 }} />}
    </>
  );
}
