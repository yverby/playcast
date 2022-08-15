import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

export function usePreserveScroll() {
  const router = useRouter();

  const isBack = useRef(false);
  const scrollPositions = useRef<Record<string, number>>({});

  useEffect(() => {
    router.beforePopState(() => {
      isBack.current = true;
      return true;
    });

    const onRouteChangeStart = () => {
      scrollPositions.current[router.asPath] = window.scrollY;
    };

    const onRouteChangeComplete = (url: string) => {
      if (isBack.current && scrollPositions.current[url]) {
        window.scroll({
          top: scrollPositions.current[url],
          behavior: 'auto',
        });
      }

      isBack.current = false;
    };

    router.events.on('routeChangeStart', onRouteChangeStart);
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', onRouteChangeStart);
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router]);
}
