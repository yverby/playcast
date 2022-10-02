import { useState, useCallback } from 'react';
import { Group, Button } from '@mantine/core';
import {
  TbPlayerPlay,
  TbPlayerPause,
  TbPlayerTrackPrev,
  TbPlayerTrackNext,
} from 'react-icons/tb';

import type { IconType } from 'react-icons';

import { useStyles } from './styles';

export function PlayerControls() {
  const { cx, classes } = useStyles();
  const [play, setPlay] = useState(false);

  const cn = useCallback(
    (active?: boolean) => {
      const root = cx(classes.button, { [classes.inactive]: !active });
      return { root, inner: classes.inner, label: classes.label };
    },
    [cx, classes]
  );

  const icon = useCallback(
    (Icon: IconType) => <Icon size={17} strokeWidth={2.25} />,
    []
  );

  return (
    <Group className={classes.controls}>
      <Button classNames={cn()}>{icon(TbPlayerTrackPrev)}</Button>

      <Button classNames={cn(play)} onClick={() => setPlay((p) => !p)}>
        {icon(!play ? TbPlayerPlay : TbPlayerPause)}
      </Button>

      <Button classNames={cn()}>{icon(TbPlayerTrackNext)}</Button>
    </Group>
  );
}
