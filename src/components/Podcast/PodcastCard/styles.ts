import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  podcast: {
    all: 'unset',
    display: 'block',
    padding: 5,
    paddingBottom: 10,
    borderRadius: 14,
    backgroundColor: theme.other.variable(theme, 'colorCard'),
    cursor: 'pointer',

    '&:focus': {
      ...theme.fn.focusStyles(),
    },
  },
  image: {
    borderRadius: 12,
  },
  title: {
    height: 46,
    padding: 10,
  },
}));
