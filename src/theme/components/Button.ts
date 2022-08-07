import type {
  ButtonProps,
  ButtonStylesNames,
  ButtonStylesParams,
} from '@mantine/core';

import type { ThemeComponent } from 'src/theme/types';

export const Button: ThemeComponent<
  ButtonProps,
  ButtonStylesNames,
  ButtonStylesParams
> = {
  defaultProps: {
    radius: 'md',
  },
};
