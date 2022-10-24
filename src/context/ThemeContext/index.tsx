import { useState, useEffect, useCallback } from 'react';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';

import type { ReactNode } from 'react';
import type { ColorScheme } from '@mantine/core';

import { configureTheme } from 'src/theme';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');

  useEffect(() => {
    document.documentElement.style.colorScheme = colorScheme;
  }, [colorScheme]);

  const toggleColorScheme = useCallback(
    (scheme?: ColorScheme) => {
      setColorScheme(scheme || colorScheme === 'dark' ? 'light' : 'dark');
    },
    [colorScheme]
  );

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={configureTheme({ colorScheme })}
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
