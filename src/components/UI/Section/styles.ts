import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  section: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 9998,
    display: 'flex',
    alignItems: 'flex-end',
    height: 56,
  },
}));
