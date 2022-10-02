import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  image: {
    width: 180,
    margin: '0 auto',
    borderRadius: 10,
    overflow: 'hidden',
  },
  info: {
    minHeight: 50,
  },
  collection: {
    color: theme.other.variable(theme, 'colorTextInfo'),
  },
}));
