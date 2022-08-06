import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  box: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    position: 'sticky',
    top: 0,
    display: 'flex',
    alignItems: 'flex-end',
    height: 56,
    backgroundColor: theme.fn.rgba(theme.other.var(theme, 'colorBg'), 0.97),
  },
}));
