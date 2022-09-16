import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  caption: {
    all: 'unset',
    padding: theme.spacing.lg,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.other.variable(theme, 'colorCard'),
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: theme.other.variable(theme, 'colorCardAccent'),
    },

    '&:focus': {
      ...theme.fn.focusStyles(),
    },
  },
  title: {
    color: theme.other.variable(theme, 'colorTextInfo'),
  },
  value: {
    fontWeight: 600,
  },
}));
