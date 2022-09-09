import { createStyles } from '@mantine/core';

import { DEFAULTS } from 'src/constants';

import type { GroupedTransitionProps } from '@mantine/core';

export const useStyles = createStyles((theme, { top }: { top: number }) => ({
  drawer: {
    position: 'absolute',
    top,
    zIndex: 9998,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    backgroundColor: theme.other.variable(theme, 'colorBgDrop'),
    overflow: 'hidden',

    [theme.fn.smallerThan('sm')]: {
      height: 'calc(100vh - 65px)',
    },
  },
  spacer: {
    flex: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '65vh',
    backgroundColor: theme.other.variable(theme, 'colorBg'),

    [theme.fn.smallerThan('sm')]: {
      height: '55vh',
    },
  },
}));

export const transitions: GroupedTransitionProps['transitions'] = {
  drawer: {
    duration: DEFAULTS.DURATION / 2,
    transition: 'fade',
    timingFunction: 'ease',
  },
  container: {
    duration: DEFAULTS.DURATION,
    transition: 'slide-up',
  },
};
