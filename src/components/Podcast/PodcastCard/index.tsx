import { useMemo } from 'react';
import Link from 'next/link';
import { Box, Text, Stack, Image, AspectRatio } from '@mantine/core';

import { ROUTE } from 'src/constants';
import { replaceBy } from 'src/lib/helpers';

import type { Podcast } from 'src/store/podcasts/types';

import { useStyles } from './styles';

export function PodcastCard({ id, name, image, artist }: Podcast) {
  const { classes } = useStyles();

  const href = useMemo(() => replaceBy(ROUTE.PODCAST, { ':id': id }), [id]);

  return (
    <Link href={href} passHref>
      <Box component="a" className={classes.podcast}>
        <Stack>
          <AspectRatio ratio={1 / 1}>
            <Image src={image?.[600]} className={classes.image} />
          </AspectRatio>

          <Stack spacing={4} className={classes.info}>
            <Text size="sm" lineClamp={1} className={classes.name}>
              {name}
            </Text>

            <Text size="xs" lineClamp={1} className={classes.artist}>
              {artist?.name}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Link>
  );
}
