import type { AppProps } from 'next/app';

import { Shell as AppShell } from 'src/screens/Shell';
import {
  AppContext,
  StoreContext,
  ThemeContext,
  LocaleContext,
} from 'src/context';

import 'src/assets/styles/global.css';

export default function App({ pageProps, Component }: AppProps) {
  return (
    <AppContext>
      <StoreContext>
        <ThemeContext>
          <LocaleContext>
            <AppShell>
              <Component {...pageProps} />
            </AppShell>
          </LocaleContext>
        </ThemeContext>
      </StoreContext>
    </AppContext>
  );
}
