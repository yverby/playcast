import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  episode: {
    all: 'unset',
    display: 'block',
    padding: 4.5,
    borderRadius: 14,
    backgroundColor: theme.other.variable(theme, 'colorCard'),
    overflow: 'hidden',
    cursor: 'pointer',

    '&:focus': {
      ...theme.fn.focusStyles(),
    },

    '&:hover': {
      backgroundColor: theme.other.variable(theme, 'colorCardAccent'),
    },
  },
  image: {
    flexShrink: 0,
    borderRadius: 11,
    overflow: 'hidden',
  },
  name: {
    fontWeight: 600,
  },
  artist: {
    color: theme.other.variable(theme, 'colorTextInfo'),
  },
}));
