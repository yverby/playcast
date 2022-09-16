import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  html: {
    fontSize: theme.fontSizes.sm,
  },
  title: {
    color: theme.other.variable(theme, 'colorTextInfo'),
  },
  value: {
    fontWeight: 600,
  },
}));
