import { useMemo } from 'react';
import { values } from 'lodash';
import { useDispatch } from 'react-redux';
import { Box, Text, Image, Stack, Group } from '@mantine/core';

import { DRAWER } from 'src/constants';
import { uiActions } from 'src/store/ui/actions';

import type { Episode } from 'src/store/podcasts/types';

import { useStyles } from './styles';

export function EpisodeCard({ guid, name, image, collection }: Episode) {
  const dispatch = useDispatch();
  const { classes } = useStyles();

  const openDrawer = () => {
    const props = { guid, id: collection?.id };
    dispatch(uiActions.drawer.open(DRAWER.EPISODE, props));
  };

  const src = useMemo(() => values(image).reverse().find(Boolean), [image]);

  return (
    <Box component="button" className={classes.episode} onClick={openDrawer}>
      <Group>
        <Image width={90} height={90} src={src} className={classes.image} />

        <Stack spacing={4}>
          <Text size="sm" lineClamp={1} className={classes.name}>
            {name}
          </Text>

          <Text size="xs" lineClamp={1} className={classes.artist}>
            {collection?.name}
          </Text>
        </Stack>
      </Group>
    </Box>
  );
}
