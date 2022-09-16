import { useRef, useEffect } from 'react';
import { useIntl } from 'react-intl';
import {
  Box,
  Text,
  Title,
  Stack,
  TypographyStylesProvider,
} from '@mantine/core';

import { Section } from 'src/components/UI';
import { stripScripts } from 'src/lib/helpers';

import type { Podcast } from 'src/store/podcasts/types';

import { useStyles } from './styles';

export function PodcastDetails({ name, owner, summary, description }: Podcast) {
  const { classes } = useStyles();
  const { formatMessage } = useIntl();

  const htmlRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const anchors = htmlRef.current?.querySelectorAll('a');
    anchors?.forEach((a) => a.setAttribute('target', '_blank'));
  }, [htmlRef]);

  const __html = String(stripScripts(description || summary));

  return (
    <Section>
      <Section.Header>
        <Title order={2}>{name ?? formatMessage({ id: 'ui.podcast' })}</Title>
      </Section.Header>

      <Section.Content sx={{ flex: 0 }}>
        <Stack>
          <Text>
            <Box component="span" className={classes.title}>
              {formatMessage({ id: 'ui.owner' })}:{' '}
            </Box>

            <Box component="span" className={classes.value}>
              {owner?.name}
            </Box>
          </Text>

          <Text>
            <Box component="span" className={classes.title}>
              {formatMessage({ id: 'ui.email' })}:{' '}
            </Box>

            <Box component="span" className={classes.value}>
              {owner?.email}
            </Box>
          </Text>
        </Stack>
      </Section.Content>

      <Section>
        <Section.Content>
          <TypographyStylesProvider className={classes.html}>
            <div ref={htmlRef} dangerouslySetInnerHTML={{ __html }} />
          </TypographyStylesProvider>
        </Section.Content>
      </Section>
    </Section>
  );
}
