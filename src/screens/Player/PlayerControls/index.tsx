import { Group } from '@mantine/core';
import {
  TbRotate2,
  TbPlayerPlay,
  TbPlayerPause,
  TbRotateClockwise2,
} from 'react-icons/tb';

import { Control } from 'src/components/UI';
import { usePlayer } from 'src/store/ui/hooks';

import { useStyles } from './styles';

export function PlayerControls() {
  const { classes } = useStyles();
  const { state, status, controls } = usePlayer();

  const toggle = () => (!status.playing ? controls.play() : controls.pause());
  const shift = (time: number) => () => controls.seek(state.position() + time);

  return (
    <Group className={classes.controls}>
      <Control
        title="15"
        active={false}
        icon={TbRotate2}
        onClick={shift(-15)}
        sx={{ width: 'auto' }}
      />

      <Control
        onClick={toggle}
        sx={{ width: 'auto' }}
        active={status.playing}
        icon={!status.playing ? TbPlayerPlay : TbPlayerPause}
      />

      <Control
        title="30"
        active={false}
        onClick={shift(+30)}
        sx={{ width: 'auto' }}
        icon={TbRotateClockwise2}
      />
    </Group>
  );
}
