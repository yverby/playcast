import type { AppProps } from 'next/app';

import { ThemeContext, LocaleContext } from 'src/context';

import 'src/assets/styles/global.css';

export default function App({ pageProps, Component }: AppProps) {
  return (
    <ThemeContext>
      <LocaleContext>
        <Component {...pageProps} />
      </LocaleContext>
    </ThemeContext>
  );
}
