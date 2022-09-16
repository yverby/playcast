import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  preview: {
    padding: theme.spacing.lg,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.other.variable(theme, 'colorCard'),
  },
  image: {
    borderRadius: 14,
    overflow: 'hidden',
  },
  artist: {
    color: theme.other.variable(theme, 'colorTextInfo'),
  },
}));
