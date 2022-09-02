import { Box } from '@mantine/core';
import { useSelector } from 'react-redux';

import type { ReactNode } from 'react';

import { selectUiSidebar } from 'src/store/ui/selectors';

import { ShellNavbar } from './ShellNavbar';
import { ShellSidebar } from './ShellSidebar';

import { useStyles } from './styles';

interface ShellProps {
  children: ReactNode;
}

export function Shell({ children }: ShellProps) {
  const { cx, classes } = useStyles();

  const sidebar = useSelector(selectUiSidebar);

  return (
    <Box className={classes.shell}>
      <Box component="nav" className={cx(classes.bar, classes.navbar)}>
        <ShellNavbar />
      </Box>

      <Box component="main" className={classes.content}>
        {children}
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
