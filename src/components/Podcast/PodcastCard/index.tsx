import { Text, Stack, Image, Skeleton, AspectRatio } from '@mantine/core';

import type { Podcast } from 'src/store/podcasts/types';

import { useStyles } from './styles';

interface PodcastCardProps extends Podcast {
  loading?: boolean;
}

export function PodcastCard({
  name,
  image,
  artist,
  loading = false,
}: PodcastCardProps) {
  const { classes } = useStyles();

  return (
    <Skeleton radius={14} visible={loading}>
      <Stack className={classes.podcast}>
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
    </Skeleton>
  );
}
