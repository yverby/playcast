import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  episode: {
    all: 'unset',
    display: 'flex',
    justifyContent: 'space-between',
    gap: theme.spacing.xs,
    padding: 5,
    borderRadius: 14,
    backgroundColor: theme.other.variable(theme, 'colorCard'),
    cursor: 'pointer',

    '&:focus': {
      ...theme.fn.focusStyles(),
    },
  },
  info: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: theme.spacing.xs,
  },
  image: {
    flexShrink: 0,
    borderRadius: theme.radius.md,
    overflow: 'hidden',
  },
}));
