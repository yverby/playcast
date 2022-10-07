import type {
  ImageProps,
  ImageStylesNames,
  ImageStylesParams,
} from '@mantine/core';

import type { ThemeComponent } from 'src/theme/types';

export const Image: ThemeComponent<
  ImageProps,
  ImageStylesNames,
  ImageStylesParams
> = {
  styles: (theme) => ({
    figure: {
      width: '100%',
      height: '100%',
    },
    imageWrapper: {
      width: '100%',
      height: '100%',
    },
    placeholder: {
      backgroundColor: theme.other.variable(theme, 'colorBg'),
    },
  }),
};
