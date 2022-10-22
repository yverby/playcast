import { useEffect } from 'react';
import { Paper, Stack } from '@mantine/core';

import { usePlayer, usePlaylist } from 'src/store/ui/hooks';

import { PlayerPreview } from './PlayerPreview';
import { PlayerTimeline } from './PlayerTimeline';
import { PlayerControls } from './PlayerControls';

import { useStyles } from './styles';

export function Player() {
  const playlist = usePlaylist();
  const { classes } = useStyles();
  const { status, controls } = usePlayer();

  const [episode] = playlist.state.queue;
  const { source } = { ...episode };

  useEffect(() => {
    source && controls.load(source);
  }, [source]);

  useEffect(() => {
    status.ended && playlist.actions.next();
  }, [status.ended]);

  return (
    <Paper className={classes.player}>
      <Stack spacing="md">
        <PlayerPreview {...episode} />
        <PlayerTimeline />
        <PlayerControls />
      </Stack>
    </Paper>
  );
}
