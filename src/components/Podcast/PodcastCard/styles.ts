import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  podcast: {
    all: 'unset',
    display: 'block',
    padding: 4.5,
    paddingBottom: 11,
    borderRadius: 14,
    backgroundColor: theme.other.variable(theme, 'colorCard'),
    cursor: 'pointer',

    '&:focus': {
      ...theme.fn.focusStyles(),
    },

    '&:hover': {
      backgroundColor: theme.other.variable(theme, 'colorCardAccent'),
    },
  },
  image: {
    borderRadius: 13,
  },
  info: {
    padding: `0 ${theme.spacing.xs}px`,
  },
  name: {
    minHeight: 16,
    fontWeight: 600,
  },
  artist: {
    minHeight: 16,
    color: theme.other.variable(theme, 'colorTextInfo'),
  },
}));
