import { useMemo, useEffect } from 'react';
import { useInterval, useSetState } from '@mantine/hooks';
import { Text, Group, Stack, Slider } from '@mantine/core';

import { specifyTime } from 'src/lib/helpers';
import { usePlayer } from 'src/store/ui/hooks';

import { useStyles } from './styles';

export function PlayerTimeline() {
  const { classes } = useStyles();
  const { seek, status, duration: full } = usePlayer();

  const duration = useMemo(() => full(), [status.ready]);

  const [{ value, position }, setState] = useSetState({
    sync: true,
    value: seek(),
    position: seek(),
  });

  useEffect(() => {
    setState({
      sync: true,
      value: seek(),
      position: seek(),
    });
  }, [status.ready]);

  const interval = useInterval(() => {
    setState(({ sync }) => ({
      position: seek(),
      ...(sync && { value: seek() }),
    }));
  }, 1000);

  useEffect(() => {
    status.playing && interval.start();
    return () => interval.stop();
  }, [status.playing]);

  const changePosition = (sync: boolean) => (val: number) => {
    if (sync) seek(val);
    setState({ sync, value: val, ...(sync && { position: val }) });
  };

  return (
    <Stack spacing={5}>
      <Slider
        min={0}
        size="sm"
        value={value}
        max={duration}
        disabled={status.loading}
        label={specifyTime(value)}
        onChange={changePosition(false)}
        onChangeEnd={changePosition(true)}
      />

      <Group className={classes.time}>
        <Text size="xs">{specifyTime(position)}</Text>
        <Text size="xs">{specifyTime(duration)}</Text>
      </Group>
    </Stack>
  );
}
