import Head from 'next/head';

import type { ReactNode } from 'react';

import { Shell } from 'src/screens/Shell';

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>

      <Shell>{children}</Shell>
    </>
  );
}
