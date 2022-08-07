import type {
  DividerProps,
  DividerStylesNames,
  DividerStylesParams,
} from '@mantine/core';

import type { ThemeComponent } from 'src/theme/types';

export const Divider: ThemeComponent<
  DividerProps,
  DividerStylesNames,
  DividerStylesParams
> = {
  styles: (theme) => ({
    root: {
      borderColor: `${theme.other.var(theme, 'colorCard')} !important`,
    },
    label: {
      '&:before,&:after': {
        borderColor: theme.other.var(theme, 'colorCard'),
      },
    },
  }),
};
