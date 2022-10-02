import { Text, Stack, Group, Slider } from '@mantine/core';
import { useState } from 'react';

import { formatDuration } from 'src/lib/helpers';

import { useStyles } from './styles';

interface PlayerSliderProps {
  duration?: number;
}

export function PlayerTimeline({ duration = 0 }: PlayerSliderProps) {
  const { classes } = useStyles();
  const [value, setValue] = useState(50);

  return (
    <Stack spacing={5}>
      <Slider
        size="sm"
        value={value}
        onChange={setValue}
        label={formatDuration(Math.round(duration * (value / 100)))}
      />

      <Group className={classes.duration}>
        <Text size="xs">{formatDuration(0)}</Text>

        <Text size="xs">{formatDuration(duration)}</Text>
      </Group>
    </Stack>
  );
}
