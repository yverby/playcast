import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  header: {
    borderColor: 'transparent',

    [theme.fn.smallerThan('lg')]: {
      backgroundColor: 'transparent',
      backdropFilter: 'none',
    },
  },
}));
