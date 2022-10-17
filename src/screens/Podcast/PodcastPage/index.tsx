import { useIntl } from 'react-intl';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@mantine/hooks';
import { Title, Stack, useMantineTheme } from '@mantine/core';

import { BRAND } from 'src/constants';
import { Status, Section } from 'src/components/UI';
import { usePodcasts } from 'src/store/podcasts/hooks';

import { PodcastPagePreview } from './PodcastPagePreview';
import { PodcastPageCaption } from './PodcastPageCaption';
import { PodcastPageEpisodes } from './PodcastPageEpisodes';

export function PodcastPage() {
  const router = useRouter();
  const theme = useMantineTheme();
  const { formatMessage } = useIntl();

  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

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
              <Stack spacing={sm ? 'sm' : 'lg'}>
                <PodcastPagePreview {...podcast} />

                <PodcastPageCaption {...podcast} />
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
              <PodcastPageEpisodes {...podcast} />
            </Section.Content>
          </Section>
        </Status>
      </Section>
    </>
  );
}
