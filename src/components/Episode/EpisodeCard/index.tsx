import { Text, Image, Skeleton, Stack, Group } from '@mantine/core';

import type { Episode } from 'src/store/podcasts/types';

import { useStyles } from './styles';

interface EpisodeCardProps extends Episode {
  loading?: boolean;
}

export function EpisodeCard({
  name,
  image,
  collection,
  loading = false,
}: EpisodeCardProps) {
  const { classes } = useStyles();

  return (
    <Skeleton radius={14} visible={loading}>
      <Group className={classes.episode}>
        <Image
          width={90}
          height={90}
          src={image?.[600]}
          className={classes.image}
        />

        <Stack spacing={4}>
          <Text size="sm" lineClamp={1} className={classes.name}>
            {name}
          </Text>

          <Text size="xs" lineClamp={1} className={classes.artist}>
            {collection?.name}
          </Text>
        </Stack>
      </Group>
    </Skeleton>
  );
}
