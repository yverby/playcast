import { useIntl } from 'react-intl';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@mantine/hooks';
import { Title, Stack, useMantineTheme } from '@mantine/core';

import { BRAND } from 'src/constants';
import { Status, Section } from 'src/components/UI';
import { usePodcasts } from 'src/store/podcasts/hooks';

import { PodcastRootPreview } from './PodcastRootPreview';
import { PodcastRootCaption } from './PodcastRootCaption';
import { PodcastRootEpisodes } from './PodcastRootEpisodes';

export function PodcastRoot() {
  const router = useRouter();
  const theme = useMantineTheme();
  const { formatMessage } = useIntl();

  const isMaxSm = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  const podcasts = usePodcasts({ id: [router.query.id as string] });
  const [podcast] = podcasts.data;

  return (
    <>
      <Head>
        <title>
          {podcast?.name ?? formatMessage({ id: 'ui.podcast' })} / {BRAND.NAME}
        </title>
      </Head>

      <Section>
        <Section.Header>
          <Title order={2}>
            {podcast?.name ?? formatMessage({ id: 'ui.podcast' })}
          </Title>
        </Section.Header>

        <Status selectors={{ ...podcasts, data: podcast }}>
          <Section sx={{ flex: 0 }}>
            <Section.Content>
              <Stack spacing={isMaxSm ? 'sm' : 'lg'}>
                <PodcastRootPreview {...podcast} />

                <PodcastRootCaption {...podcast} />
              </Stack>
            </Section.Content>
          </Section>

          <Section sx={{ flex: 0 }}>
            <Section.Header sx={{ top: 58 }}>
              <Title order={2}>
                {formatMessage({ id: 'podcast.lastEpisodes' })}
              </Title>
            </Section.Header>

            <Section.Content>
              <PodcastRootEpisodes {...podcast} />
            </Section.Content>
          </Section>
        </Status>
      </Section>
    </>
  );
}
