import { MantineProvider } from '@mantine/core';

import type { ReactNode } from 'react';

interface ThemeContextProps {
  children: ReactNode;
}

export function ThemeContext({ children }: ThemeContextProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {children}
    </MantineProvider>
  );
}
