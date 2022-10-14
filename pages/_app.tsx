import type { AppProps } from 'next/app';

import { Shell as AppShell } from 'src/screens/Shell';
import {
  AppContext,
  MediaContext,
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
            <MediaContext>
              <AppShell>
                <Component {...pageProps} />
              </AppShell>
            </MediaContext>
          </LocaleContext>
        </ThemeContext>
      </StoreContext>
    </AppContext>
  );
}
