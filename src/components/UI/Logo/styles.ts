import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  play: {
    color: theme.other.variable(theme, 'colorPrimary'),
    fontSize: 'inherit',
  },
  cast: {
    color: theme.other.variable(theme, 'colorText'),
    fontSize: 'inherit',
  },
}));
