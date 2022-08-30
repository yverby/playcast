import Link from 'next/link';
import { Box, Text, Image, Stack, Group } from '@mantine/core';

import type { Episode } from 'src/store/podcasts/types';

import { useStyles } from './styles';

export function EpisodeCard({ guid, name, image, collection }: Episode) {
  const { classes } = useStyles();

  return (
    <Link href={`/podcast/${collection?.id}?e=${guid}`} passHref>
      <Box component="a" className={classes.episode}>
        <Group>
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
      </Box>
    </Link>
  );
}
