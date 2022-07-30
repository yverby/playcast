import type { ColorScheme, MantineThemeOverride } from '@mantine/core';

export function configureTheme({
  colorScheme,
}: {
  colorScheme: ColorScheme;
}): MantineThemeOverride {
  return {
    colorScheme,
    primaryColor: 'teal',
    primaryShade: {
      dark: 6,
      light: 5,
    },
    radius: {
      md: 9,
    },
    lineHeight: 1.25,
    fontFamily: 'Gilroy, sans-serif',
    headings: {
      fontFamily: 'Gilroy, sans-serif',
      sizes: {
        h1: { fontSize: 28 },
        h2: { fontSize: 22 },
        h3: { fontSize: 18 },
        h4: { fontSize: 16 },
        h5: { fontSize: 15 },
        h6: { fontSize: 14 },
      },
    },
  };
}
