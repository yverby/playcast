import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Paper, Stack } from '@mantine/core';

import { usePlayer } from 'src/store/ui/hooks';
import { selectUiPlaylist } from 'src/store/ui/selectors';

import { PlayerPreview } from './PlayerPreview';
import { PlayerTimeline } from './PlayerTimeline';
import { PlayerControls } from './PlayerControls';

import { useStyles } from './styles';

export function Player() {
  const { classes } = useStyles();
  const { controls } = usePlayer();

  const [episode] = useSelector(selectUiPlaylist);

  const { source } = { ...episode };

  useEffect(() => {
    source && controls.load(source);
  }, [source]);

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
