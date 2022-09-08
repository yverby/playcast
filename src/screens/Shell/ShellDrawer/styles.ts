import { createStyles } from '@mantine/core';

import { DEFAULTS } from 'src/constants';

import type { GroupedTransitionProps } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  drawer: {
    ...theme.fn.cover(),
    zIndex: 9998,
    backgroundColor: theme.other.variable(theme, 'colorBgDrop'),
  },
  spacer: {
    height: '100%',
  },
  container: {
    position: 'sticky',
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    height: '60vh',
    backgroundColor: theme.other.variable(theme, 'colorBg'),

    [theme.fn.smallerThan('sm')]: {
      bottom: 65,
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
