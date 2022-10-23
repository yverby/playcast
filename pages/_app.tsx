import type { AppProps } from 'next/app';

import { Shell as AppShell } from 'src/screens/Shell';
import {
  AppContext,
  ThemeContext,
  LocaleContext,
  QueryProvider,
} from 'src/context';

import 'src/assets/styles/global.css';

export default function App({ pageProps, Component }: AppProps) {
  return (
    <QueryProvider>
      <AppContext>
        <ThemeContext>
          <LocaleContext>
            <AppShell>
              <Component {...pageProps} />
            </AppShell>
          </LocaleContext>
        </ThemeContext>
      </AppContext>
    </QueryProvider>
  );
}
