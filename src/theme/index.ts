import type { ColorScheme, MantineThemeOverride } from '@mantine/core';

import * as variables from './variables';
import * as components from './components';

export function configureTheme({
  colorScheme,
}: {
  colorScheme: ColorScheme;
}): MantineThemeOverride {
  return {
    components,
    colorScheme,
    primaryColor: 'teal',
    primaryShade: {
      dark: 6,
      light: 6,
    },
    breakpoints: {
      md: 880,
      sm: 760,
    },
    radius: {
      md: 9,
    },
    lineHeight: 1.25,
    fontFamily: 'Gilroy, sans-serif',
    headings: {
      fontFamily: 'Gilroy, sans-serif',
      sizes: {
        h1: { fontSize: 30 },
        h2: { fontSize: 24 },
        h3: { fontSize: 20 },
        h4: { fontSize: 18 },
        h5: { fontSize: 16 },
        h6: { fontSize: 14 },
      },
    },
    other: {
      var(theme, variable) {
        return variables[variable][colorScheme](theme);
      },
    },
  };
}
