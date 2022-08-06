import type { AppProps } from 'next/app';

import { Shell } from 'src/components/Shell';
import { ThemeContext, LocaleContext } from 'src/context';

import 'src/assets/styles/global.css';

export default function App({ pageProps, Component }: AppProps) {
  return (
    <ThemeContext>
      <LocaleContext>
        <Shell>
          <Component {...pageProps} />
        </Shell>
      </LocaleContext>
    </ThemeContext>
  );
}
