import { useCallback } from 'react';
import { Group, Button } from '@mantine/core';
import {
  TbRotate2,
  TbPlayerPlay,
  TbPlayerPause,
  TbRotateClockwise2,
} from 'react-icons/tb';

import type { IconType } from 'react-icons';

import { usePlayer } from 'src/store/ui/hooks';

import { useStyles } from './styles';

export function PlayerControls() {
  const { cx, classes } = useStyles();
  const { state, status, controls } = usePlayer();

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

  const toggle = () => (!status.playing ? controls.play() : controls.pause());
  const shift = (time: number) => () => controls.seek(state.position() + time);

  return (
    <Group className={classes.controls}>
      <Button classNames={cn()} onClick={shift(-15)}>
        15 {icon(TbRotate2)}
      </Button>

      <Button classNames={cn(status.playing)} onClick={toggle}>
        {icon(!status.playing ? TbPlayerPlay : TbPlayerPause)}
      </Button>

      <Button classNames={cn()} onClick={shift(+30)}>
        {icon(TbRotateClockwise2)} 30
      </Button>
    </Group>
  );
}
