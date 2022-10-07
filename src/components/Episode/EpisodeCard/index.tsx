import { useMemo } from 'react';
import { format } from 'date-fns';
import { compact, values } from 'lodash';
import { useDispatch } from 'react-redux';
import { Text, Image, Stack, Group, Paper, AspectRatio } from '@mantine/core';

import { Logo } from 'src/components/UI';
import { humanizeTime } from 'src/lib/helpers';
import { DRAWER, FORMAT } from 'src/constants';
import { uiActions } from 'src/store/ui/actions';

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
        <AspectRatio ratio={1 / 1} className={classes.image}>
          <Image
            src={src}
            withPlaceholder
            placeholder={<Logo short order={2} />}
          />
        </AspectRatio>

        <Stack spacing={4}>
          <Text size="sm" title={name} lineClamp={1} className={classes.name}>
            {name}
          </Text>

          <Text
            size="xs"
            lineClamp={1}
            title={collection?.name}
            className={classes.artist}
          >
            {collection?.name}
          </Text>

          <Text size="xs" lineClamp={1} className={classes.artist}>
            {compact([
              date && format(new Date(date), FORMAT.DATE.EPISODE),
              source?.time && humanizeTime(source?.time),
            ]).join(' / ')}
          </Text>
        </Stack>
      </Group>
    </Paper>
  );
}
