import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  preview: {
    flexDirection: 'row',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
  },
  image: {
    minWidth: 150,
    borderRadius: 9,
    overflow: 'hidden',
  },
  collection: {
    color: theme.other.variable(theme, 'colorTextInfo'),
  },
}));
