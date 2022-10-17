import { useEffect } from 'react';
import { Paper, Stack } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';

import { usePlayer } from 'src/store/ui/hooks';
import { uiActions } from 'src/store/ui/actions';
import { selectUiPlaylist } from 'src/store/ui/selectors';

import { PlayerPreview } from './PlayerPreview';
import { PlayerTimeline } from './PlayerTimeline';
import { PlayerControls } from './PlayerControls';

import { useStyles } from './styles';

export function Player() {
  const dispatch = useDispatch();

  const { classes } = useStyles();
  const { status, controls } = usePlayer();

  const [episode] = useSelector(selectUiPlaylist);

  const { source } = { ...episode };

  useEffect(() => {
    source && controls.load(source);
  }, [source]);

  useEffect(() => {
    status.ended && dispatch(uiActions.playlist.clear());
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
