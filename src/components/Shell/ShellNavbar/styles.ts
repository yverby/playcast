import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  header: {
    borderColor: 'transparent',

    [theme.fn.smallerThan('sm')]: {
      backgroundColor: 'transparent',
      backdropFilter: 'none',
    },
  },
  stack: {
    [theme.fn.smallerThan('md')]: {
      alignItems: 'center',
    },

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.xs,
    padding: theme.spacing.sm,
    borderRadius: theme.radius.md,
    color: theme.fn.rgba(theme.other.variable(theme, 'colorText'), 0.5),
    fontSize: theme.fontSizes.sm,
    fontWeight: 600,

    '&:hover': {
      color: theme.other.variable(theme, 'colorPrimary'),
      backgroundColor: theme.fn.rgba(
        theme.other.variable(theme, 'colorPrimary'),
        0.15
      ),
    },

    [theme.fn.smallerThan('md')]: {
      justifyContent: 'center',
    },
  },
  active: {
    color: theme.other.variable(theme, 'colorPrimary'),
    backgroundColor: theme.fn.rgba(
      theme.other.variable(theme, 'colorPrimary'),
      0.125
    ),
  },
}));
