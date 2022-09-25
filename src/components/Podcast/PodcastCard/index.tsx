import { useMemo } from 'react';
import Link from 'next/link';
import { values } from 'lodash';
import { Text, Paper, Stack, Image, AspectRatio } from '@mantine/core';

import { ROUTE } from 'src/constants';
import { replaceBy } from 'src/lib/helpers';

import type { Podcast } from 'src/store/podcasts/types';

import { useStyles } from './styles';

export function PodcastCard({ id, name, image, artist }: Podcast) {
  const { classes } = useStyles();

  const href = useMemo(
    () => replaceBy(ROUTE.PODCAST.ROOT, { ':id': id }),
    [id]
  );

  const src = useMemo(() => values(image).reverse().find(Boolean), [image]);

  return (
    <Link href={href} passHref>
      <Paper component="a" className={classes.podcast}>
        <Stack>
          <AspectRatio ratio={1 / 1}>
            <Image src={src} className={classes.image} />
          </AspectRatio>

          <Stack spacing={3} className={classes.info}>
            <Text size="sm" lineClamp={1} className={classes.name}>
              {name}
            </Text>

            <Text size="xs" lineClamp={1} className={classes.artist}>
              {artist?.name}
            </Text>
          </Stack>
        </Stack>
      </Paper>
    </Link>
  );
}
