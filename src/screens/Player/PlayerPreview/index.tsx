import { useMemo } from 'react';
import { values } from 'lodash';
import { Text, Title, Image, Stack, AspectRatio } from '@mantine/core';

import { Logo } from 'src/components/UI';

import type { Episode } from 'src/store/podcasts/types';

import { useStyles } from './styles';

export function PlayerPreview({ name, image, collection }: Episode) {
  const { classes } = useStyles();

  const src = useMemo(() => values(image).reverse().find(Boolean), [image]);

  return (
    <Stack spacing="md">
      <AspectRatio ratio={1 / 1} className={classes.image}>
        <Image src={src} withPlaceholder placeholder={<Logo />} />
      </AspectRatio>

      <Stack spacing={3} className={classes.info}>
        <Text title={name} lineClamp={1} align="center">
          <Title order={3}>{name}</Title>
        </Text>

        <Text
          lineClamp={2}
          align="center"
          title={collection?.name}
          className={classes.collection}
        >
          {collection?.name}
        </Text>
      </Stack>
    </Stack>
  );
}
