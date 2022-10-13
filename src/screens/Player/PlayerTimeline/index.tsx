import { useEffect } from 'react';
import { useEvent } from 'react-use';
import { useSetState } from '@mantine/hooks';
import { Text, Group, Stack, Slider } from '@mantine/core';

import { specifyTime } from 'src/lib/helpers';
import { usePlayer } from 'src/store/ui/hooks';

import { useStyles } from './styles';

export function PlayerTimeline() {
  const { classes } = useStyles();
  const { media, state, status, controls } = usePlayer();

  const [{ value, position, duration }, setState] = useSetState({
    sliding: false,
    value: state.position(),
    position: state.position(),
    duration: state.duration(),
  });

  useEffect(() => {
    setState({
      sliding: false,
      value: state.position(),
      position: state.position(),
      duration: state.duration(),
    });
  }, [status.ready]);

  useEvent(
    'timeupdate',
    () =>
      setState(({ sliding }) => ({
        position: state.position(),
        ...(!sliding && { value: state.position() }),
      })),
    media.ref?.current
  );

  const changePosition = (sliding: boolean) => (newValue: number) => {
    !sliding && controls.seek(value);

    setState({
      sliding,
      value: newValue,
      ...(!sliding && { position: newValue }),
    });
  };

  return (
    <Stack spacing={5} mt={3}>
      <Slider
        min={0}
        size="xs"
        value={value}
        max={duration}
        disabled={!status.ready}
        label={specifyTime(value)}
        onChange={changePosition(true)}
        onChangeEnd={changePosition(false)}
      />

      <Group className={classes.timer}>
        <Text size="xs">{specifyTime(position)}</Text>
        <Text size="xs">{specifyTime(duration)}</Text>
      </Group>
    </Stack>
  );
}
