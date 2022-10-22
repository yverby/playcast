import { useMemo } from 'react';
import { values } from 'lodash';
import {
  Text,
  Title,
  Stack,
  Image,
  Center,
  Loader,
  AspectRatio,
} from '@mantine/core';

import { Logo } from 'src/components/UI';
import { BRAND, DRAWER } from 'src/constants';
import { useDrawer, usePlayer } from 'src/store/ui/hooks';

import type { Episode } from 'src/store/podcasts/types';

import { useStyles } from './styles';

export function PlayerPreview(episode: Episode) {
  const { name, guid, image, collection } = episode;

  const drawer = useDrawer(({ actions }) => actions);

  const { classes } = useStyles();
  const { media, status } = usePlayer();

  const src = useMemo(() => values(image).reverse().find(Boolean), [image]);

  const openDetails = () => drawer.open(DRAWER.EPISODE, { guid, collection });

  return (
    <Stack
      spacing="md"
      className={classes.preview}
      {...(status.ready && { onClick: openDetails })}
    >
      <AspectRatio ratio={1 / 1} className={classes.media}>
        <>
          {status.loading ? (
            <Center>
              <Loader />
            </Center>
          ) : (
            <Image src={src} placeholder={<Logo />} />
          )}
          {media.element}
        </>
      </AspectRatio>

      <Stack spacing={3}>
        <Text title={name} lineClamp={1} align="center">
          <Title order={3}>{name ?? BRAND.NAME}</Title>
        </Text>

        <Text
          lineClamp={1}
          align="center"
          title={collection?.name}
          className={classes.collection}
        >
          {collection?.name ?? BRAND.NAME}
        </Text>
      </Stack>
    </Stack>
  );
}
