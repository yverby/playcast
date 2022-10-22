import { Box } from '@mantine/core';

import type { ReactNode } from 'react';

import { useSidebar } from 'src/store/ui/hooks';

import { ShellDrawer } from './ShellDrawer';
import { ShellNavbar } from './ShellNavbar';
import { ShellSidebar } from './ShellSidebar';

import { useStyles } from './styles';

interface ShellProps {
  children: ReactNode;
}

export function Shell({ children }: ShellProps) {
  const { cx, classes } = useStyles();

  const sidebar = useSidebar(({ state }) => state);

  return (
    <Box className={classes.shell}>
      <Box component="nav" className={cx(classes.bar, classes.navbar)}>
        <ShellNavbar />
      </Box>

      <Box component="main" className={classes.content}>
        {children}

        <ShellDrawer />
      </Box>

      <Box
        component="aside"
        className={cx(classes.bar, classes.sidebar, {
          [classes.visible]: sidebar.visible,
          [classes.invisible]: !sidebar.visible,
        })}
      >
        <ShellSidebar />
      </Box>
    </Box>
  );
}
