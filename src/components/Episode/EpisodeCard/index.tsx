import { useMemo } from 'react';
import { values } from 'lodash';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { Text, Image, Stack, Group, Paper } from '@mantine/core';

import { DRAWER, FORMAT } from 'src/constants';
import { uiActions } from 'src/store/ui/actions';
import { formatDuration } from 'src/lib/helpers';

import type { Episode } from 'src/store/podcasts/types';

import { useStyles } from './styles';

export function EpisodeCard({
  guid,
  name,
  date,
  image,
  source,
  collection,
}: Episode) {
  const dispatch = useDispatch();
  const { classes } = useStyles();

  const openDrawer = () => {
    dispatch(uiActions.drawer.open(DRAWER.EPISODE, { guid, collection }));
  };

  const src = useMemo(() => values(image).reverse().find(Boolean), [image]);

  return (
    <Paper component="button" className={classes.episode} onClick={openDrawer}>
      <Group>
        <Image width={90} height={90} src={src} className={classes.image} />

        <Stack spacing={4}>
          <Text size="sm" lineClamp={1} className={classes.name}>
            {name}
          </Text>

          <Text size="xs" lineClamp={1} className={classes.artist}>
            {collection?.name}
          </Text>

          <Text size="xs" lineClamp={1} className={classes.artist}>
            {date && format(new Date(date), FORMAT.DATE.EPISODE)}
            {' / '}
            {source?.time && formatDuration(source?.time)}
          </Text>
        </Stack>
      </Group>
    </Paper>
  );
}
