import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  typography: {
    fontSize: theme.fontSizes.sm,

    p: {
      '&:last-child': {
        marginBottom: 0,
      },
    },
  },
}));
