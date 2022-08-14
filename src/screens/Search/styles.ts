import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  sticky: {
    position: 'sticky',
    top: 0,
    zIndex: 9999,
    flex: 0,
    borderBottom: theme.other.border(theme),
  },
  form: {
    ...theme.other.backdrop(theme),
  },
}));
