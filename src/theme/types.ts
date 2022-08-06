import type { ColorScheme, MantineTheme } from '@mantine/core';

export type SchemeVariable = Record<ColorScheme, (theme: MantineTheme) => any>;
