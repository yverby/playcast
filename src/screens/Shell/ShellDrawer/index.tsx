import { useRef, useEffect } from 'react';
import { get } from 'lodash';
import { useRouter } from 'next/router';
import { useScrollLock } from '@mantine/hooks';
import { Box, GroupedTransition } from '@mantine/core';

import { useDrawer } from 'src/store/ui/hooks';
import { DRAWER_REGISTER } from 'src/constants';

import { useStyles, transitions } from './styles';

export function ShellDrawer() {
  const top = useRef(0);
  const router = useRouter();

  const { classes } = useStyles({ top: top.current });
  const { 1: lockScroll } = useScrollLock();

  const { state, actions } = useDrawer();

  const Component = get(DRAWER_REGISTER, String(state.name));
  const hasComponent = Boolean(Component);

  useEffect(() => {
    lockScroll(hasComponent);
    top.current = window.scrollY;
  }, [hasComponent]);

  useEffect(() => {
    router.events.on('beforeHistoryChange', actions.close);
    return () => router.events.off('beforeHistoryChange', actions.close);
  }, [router]);

  return (
    <GroupedTransition mounted={hasComponent} transitions={transitions}>
      {(styles) => (
        <Box
          component="article"
          style={styles.drawer}
          className={classes.drawer}
        >
          <Box className={classes.spacer} onClick={actions.close} />

          <Box style={styles.container} className={classes.container}>
            {hasComponent && <Component {...state.props} />}
          </Box>
        </Box>
      )}
    </GroupedTransition>
  );
}
