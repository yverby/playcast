import type { AppProps } from 'next/app';

import {
  AppProvider,
  QueryProvider,
  ThemeProvider,
  LocaleProvider,
} from 'src/context';

import 'src/assets/styles/global.css';

export default function App({ pageProps, Component }: AppProps) {
  return (
    <QueryProvider>
      <ThemeProvider>
        <LocaleProvider>
          <AppProvider>
            <Component {...pageProps} />
          </AppProvider>
        </LocaleProvider>
      </ThemeProvider>
    </QueryProvider>
  );
}
