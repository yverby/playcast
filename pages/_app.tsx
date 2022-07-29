import type { AppProps } from 'next/app';

import { AppContext, ThemeContext } from 'src/context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContext>
      <ThemeContext>
        <Component {...pageProps} />
      </ThemeContext>
    </AppContext>
  );
}
