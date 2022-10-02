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
  styles: () => ({
    placeholder: {
      backgroundColor: 'transparent',
    },
  }),
};
