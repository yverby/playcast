import { Paper, Stack } from '@mantine/core';

import { createEpisode } from 'src/lib/helpers';

import { PlayerPreview } from './PlayerPreview';
import { PlayerTimeline } from './PlayerTimeline';
import { PlayerControls } from './PlayerControls';

import { useStyles } from './styles';

export function Player() {
  const { classes } = useStyles();

  return (
    <Paper className={classes.player}>
      <Stack spacing="md">
        <PlayerPreview {...createEpisode({})} />
        <PlayerTimeline />
        <PlayerControls />
      </Stack>
    </Paper>
  );
}
