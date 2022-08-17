import { Box, Text, Image, Skeleton, AspectRatio } from '@mantine/core';

import type { Podcast } from 'src/store/podcasts/types';

import { useStyles } from './styles';

interface PodcastCardProps extends Podcast {
  loading?: boolean;
}

export function PodcastCard({
  name,
  image,
  loading = false,
}: PodcastCardProps) {
  const { classes } = useStyles();

  return (
    <Skeleton radius={14} visible={loading}>
      <Box className={classes.podcast}>
        <AspectRatio ratio={1 / 1}>
          <Image src={image?.[600]} className={classes.image} />
        </AspectRatio>

        <Text size="sm" lineClamp={2} className={classes.name}>
          {name}
        </Text>
      </Box>
    </Skeleton>
  );
}
