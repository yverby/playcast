import Head from 'next/head';

import type { ReactNode } from 'react';

import { usePreserveScroll } from 'src/store/ui/hooks';

interface AppContextProps {
  children: ReactNode;
}

export function AppContext({ children }: AppContextProps) {
  usePreserveScroll();

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>

      {children}
    </>
  );
}
