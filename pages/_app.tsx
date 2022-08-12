import type { AppProps } from 'next/app';

import { Shell } from 'src/components/Shell';
import { StoreContext, ThemeContext, LocaleContext } from 'src/context';

import 'src/assets/styles/global.css';

export default function App({ pageProps, Component }: AppProps) {
  return (
    <StoreContext>
      <ThemeContext>
        <LocaleContext>
          <Shell>
            <Component {...pageProps} />
          </Shell>
        </LocaleContext>
      </ThemeContext>
    </StoreContext>
  );
}
