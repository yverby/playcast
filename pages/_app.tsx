import Head from 'next/head';

import type { AppProps } from 'next/app';

import { Shell } from 'src/components/Shell';
import { StoreContext, ThemeContext, LocaleContext } from 'src/context';

import 'src/assets/styles/global.css';

export default function App({ pageProps, Component }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>

      <StoreContext>
        <ThemeContext>
          <LocaleContext>
            <Shell>
              <Component {...pageProps} />
            </Shell>
          </LocaleContext>
        </ThemeContext>
      </StoreContext>
    </>
  );
}
