import { useEffect, useCallback } from 'react';
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
  const router = useRouter();
  const dispatch = useDispatch();

  const { classes } = useStyles();
  const { 1: lockScroll } = useScrollLock();

  const drawer = useSelector(selectUiDrawer);

  const Component = get(DRAWER_REGISTER, String(drawer.name));
  const hasComponent = Boolean(Component);

  const closeDrawer = useCallback(() => dispatch(uiActions.drawer.close()), []);

  useEffect(() => {
    lockScroll(hasComponent);
  }, [hasComponent]);

  useEffect(() => {
    router.events.on('routeChangeComplete', closeDrawer);
    return () => router.events.off('routeChangeComplete', closeDrawer);
  }, [router, closeDrawer]);

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
