import { Text, Stack, Title, Image } from '@mantine/core';

import type { Podcast } from 'src/store/podcasts/types';

import { useStyles } from './styles';

export function PodcastPreview({ name, image, artist }: Podcast) {
  const { classes } = useStyles();

  return (
    <Stack align="center" spacing="lg" className={classes.preview}>
      <Image src={image?.[600]} width={200} className={classes.image} />

      <Stack spacing={5}>
        <Text lineClamp={2} align="center">
          <Title order={2}>{name}</Title>
        </Text>

        <Text lineClamp={2} align="center" className={classes.artist}>
          {artist.name}
        </Text>
      </Stack>
    </Stack>
  );
}
