import Head from 'next/head';

import type { ReactNode } from 'react';

interface AppContextProps {
  children: ReactNode;
}

export function AppContext({ children }: AppContextProps) {
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
