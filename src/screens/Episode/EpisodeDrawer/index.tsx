import { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { Title, Paper, Stack } from '@mantine/core';

import { mergeImage } from 'src/lib/helpers';
import { usePodcasts } from 'src/store/podcasts/hooks';
import { Status, Section, Typography } from 'src/components/UI';

import type { Episode } from 'src/store/podcasts/types';

import { EpisodeDrawerPreview } from './EpisodeDrawerPreview';
import { EpisodeDrawerCaption } from './EpisodeDrawerCaption';

import { useStyles } from './styles';

export function EpisodeDrawer({
  guid,
  collection,
}: Pick<Episode, 'guid' | 'collection'>) {
  const { classes } = useStyles();
  const { formatMessage } = useIntl();

  const podcasts = usePodcasts({ id: [collection?.id as string] });

  const [podcast] = podcasts.data;

  const episode = useMemo(
    () => podcast?.episodes?.find((e) => e.guid === guid),
    [guid, podcast?.episodes]
  );

  return (
    <Section>
      <Section.Header>
        <Title order={2}>
          {episode?.name ?? formatMessage({ id: 'ui.podcastEpisode' })}
        </Title>
      </Section.Header>

      <Status selectors={{ ...podcasts, data: episode }}>
        {episode && (
          <Section>
            <Section.Content>
              <Stack spacing="lg">
                <Paper className={classes.preview}>
                  <EpisodeDrawerPreview
                    {...episode}
                    collection={collection}
                    image={mergeImage(podcast.image, episode.image)}
                  />
                </Paper>

                <Paper className={classes.content}>
                  <EpisodeDrawerCaption {...episode} />
                </Paper>

                {episode.content && (
                  <Paper className={classes.content}>
                    <Typography>{episode.content}</Typography>
                  </Paper>
                )}
              </Stack>
            </Section.Content>
          </Section>
        )}
      </Status>
    </Section>
  );
}
