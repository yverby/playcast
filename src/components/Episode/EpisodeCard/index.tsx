import { Box, Text, Image } from '@mantine/core';

import type { Episode } from 'src/store/podcasts/types';

import { useStyles } from './styles';

export function EpisodeCard({ name, image }: Episode) {
  const { classes } = useStyles();

  return (
    <Box className={classes.episode}>
      <Box className={classes.info}>
        <Image
          width={89}
          height={89}
          src={image?.[600]}
          className={classes.image}
        />

        <Text size="sm" lineClamp={2}>
          {name}
        </Text>
      </Box>
    </Box>
  );
}
