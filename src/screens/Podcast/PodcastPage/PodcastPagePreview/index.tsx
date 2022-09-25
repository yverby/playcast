import { Text, Stack, Paper, Title, Image } from '@mantine/core';

import type { Podcast } from 'src/store/podcasts/types';

import { useStyles } from './styles';

export function PodcastPagePreview({ name, image, artist }: Podcast) {
  const { classes } = useStyles();

  return (
    <Paper className={classes.preview}>
      <Stack align="center">
        <Image src={image?.[600]} width={200} className={classes.image} />

        <Stack spacing={3}>
          <Text lineClamp={2} align="center">
            <Title order={2}>{name}</Title>
          </Text>

          <Text lineClamp={2} align="center" className={classes.artist}>
            {artist.name}
          </Text>
        </Stack>
      </Stack>
    </Paper>
  );
}
