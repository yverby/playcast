import { Box, Text, Image, AspectRatio } from '@mantine/core';

import type { Podcast } from 'src/store/podcasts/types';

import { useStyles } from './styles';

export function PodcastCard({ name, image }: Podcast) {
  const { classes } = useStyles();

  return (
    <Box className={classes.podcast}>
      <AspectRatio ratio={1 / 1}>
        <Image src={image?.[600]} className={classes.image} />
      </AspectRatio>

      <Text size="sm" lineClamp={2} className={classes.title}>
        {name}
      </Text>
    </Box>
  );
}
