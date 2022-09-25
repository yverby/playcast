import { useRef, useEffect, useCallback } from 'react';
import { get } from 'lodash';
import { useRouter } from 'next/router';
import { useScrollLock } from '@mantine/hooks';
import { Box, GroupedTransition } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';

import { DRAWER_REGISTER } from 'src/constants';
import { uiActions } from 'src/store/ui/actions';
import { selectUiDrawer } from 'src/store/ui/selectors';

import { useStyles, transitions } from './styles';

export function ShellDrawer() {
  const top = useRef(0);
  const router = useRouter();
  const dispatch = useDispatch();

  const { classes } = useStyles({ top: top.current });
  const { 1: lockScroll } = useScrollLock();

  const drawer = useSelector(selectUiDrawer);

  const closeDrawer = useCallback(() => dispatch(uiActions.drawer.close()), []);

  const Component = get(DRAWER_REGISTER, String(drawer.name));
  const hasComponent = Boolean(Component);

  useEffect(() => {
    lockScroll(hasComponent);
    top.current = window.scrollY;
  }, [hasComponent]);

  useEffect(() => {
    router.events.on('beforeHistoryChange', closeDrawer);
    return () => router.events.off('beforeHistoryChange', closeDrawer);
  }, [router]);

  return (
    <GroupedTransition mounted={hasComponent} transitions={transitions}>
      {(styles) => (
        <Box
          component="article"
          style={styles.drawer}
          className={classes.drawer}
        >
          <Box className={classes.spacer} onClick={closeDrawer} />

          <Box style={styles.container} className={classes.container}>
            {hasComponent && <Component {...drawer.props} />}
          </Box>
        </Box>
      )}
    </GroupedTransition>
  );
}
