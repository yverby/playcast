import Link from 'next/link';
import { Box, Text, Stack, Image, AspectRatio } from '@mantine/core';

import type { Podcast } from 'src/store/podcasts/types';

import { useStyles } from './styles';

export function PodcastCard({ id, name, image, artist }: Podcast) {
  const { classes } = useStyles();

  return (
    <Link href={`/podcast/${id}`} passHref>
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
