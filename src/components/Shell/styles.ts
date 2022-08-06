import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  shell: {
    display: 'flex',
    maxWidth: theme.breakpoints.lg,
    minHeight: '100vh',
    margin: '0 auto',

    [theme.fn.smallerThan('lg')]: {
      maxWidth: theme.breakpoints.md,
    },

    [theme.fn.smallerThan('md')]: {
      maxWidth: theme.breakpoints.sm,
    },

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column-reverse',
      maxWidth: theme.breakpoints.xs,
    },
  },
  bar: {
    position: 'sticky',
    top: 0,
    zIndex: 9999,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflow: 'hidden',
    overflowY: 'auto',
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  navbar: {
    width: 200,

    [theme.fn.smallerThan('md')]: {
      width: 80,
    },

    [theme.fn.smallerThan('sm')]: {
      bottom: 0,
      width: '100%',
      height: 'auto',
    },
  },
  sidebar: {
    width: 320,

    [theme.fn.smallerThan('lg')]: {
      position: 'fixed',
      right: 0,

      display: 'none',
    },

    [theme.fn.smallerThan('xs')]: {
      left: 0,
    },
  },
}));
