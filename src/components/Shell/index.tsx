import { Box } from '@mantine/core';

import type { ReactNode } from 'react';

import { ShellNavbar } from './ShellNavbar';
import { ShellSidebar } from './ShellSidebar';

import { useStyles } from './styles';

interface ShellProps {
  children: ReactNode;
}

export function Shell({ children }: ShellProps) {
  const { cx, classes } = useStyles();

  return (
    <Box className={classes.shell}>
      <Box component="nav" className={cx(classes.bar, classes.navbar)}>
        <ShellNavbar />
      </Box>

      <Box component="main" className={classes.content}>
        {children}
      </Box>

      <Box component="aside" className={cx(classes.bar, classes.sidebar)}>
        <ShellSidebar />
      </Box>
    </Box>
  );
}
