import type { MantineTheme } from '@mantine/core';

import * as variables from 'src/theme/variables';

type SchemeVariable = keyof typeof variables;

declare module '@mantine/core' {
  interface MantineThemeOther {
    var: (theme: MantineTheme, variable: SchemeVariable) => any;
  }
}
