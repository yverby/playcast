import { useEffect } from 'react';
import { get } from 'lodash';
import { useSelector } from 'react-redux';
import { Paper, Stack } from '@mantine/core';

import { usePlayer } from 'src/store/ui/hooks';
import { selectUiPlaylist } from 'src/store/ui/selectors';

import { PlayerPreview } from './PlayerPreview';
import { PlayerTimeline } from './PlayerTimeline';
import { PlayerControls } from './PlayerControls';

import { useStyles } from './styles';

export function Player() {
  const { load } = usePlayer();
  const { classes } = useStyles();

  const [episode] = useSelector(selectUiPlaylist);

  const src = get(episode, 'source.url');

  useEffect(() => {
    src && load({ src });
  }, [src]);

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
