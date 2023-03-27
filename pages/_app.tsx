import type { AppProps } from 'next/app';

import {
  AppProvider,
  QueryProvider,
  ThemeProvider,
  LocaleProvider,
  SettingsContext,
} from 'src/context';

import 'src/assets/styles/fonts.css';

export default function App({ pageProps, Component }: AppProps) {
  return (
    <SettingsContext>
      <ThemeProvider>
        <LocaleProvider>
          <QueryProvider>
            <AppProvider>
              <Component {...pageProps} />
            </AppProvider>
          </QueryProvider>
        </LocaleProvider>
      </ThemeProvider>
    </SettingsContext>
  );
}
