import { Box, Text, Image, Skeleton } from '@mantine/core';

import type { Episode } from 'src/store/podcasts/types';

import { useStyles } from './styles';

interface EpisodeCardProps extends Episode {
  loading?: boolean;
}

export function EpisodeCard({
  name,
  image,
  loading = false,
}: EpisodeCardProps) {
  const { classes } = useStyles();

  return (
    <Skeleton radius={14} visible={loading}>
      <Box className={classes.episode}>
        <Box className={classes.info}>
          <Image
            width={90}
            height={90}
            src={image?.[600]}
            className={classes.image}
          />

          <Text size="sm" lineClamp={2}>
            {name}
          </Text>
        </Box>
      </Box>
    </Skeleton>
  );
}
