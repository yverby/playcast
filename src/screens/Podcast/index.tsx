import { useIntl } from 'react-intl';
import Head from 'next/head';
import { Title } from '@mantine/core';
import { useRouter } from 'next/router';

import { BRAND } from 'src/constants';
import { Status, Section } from 'src/components/UI';
import { usePodcasts } from 'src/store/podcasts/hooks';

import { PodcastPreview } from './PodcastPreview';
import { PodcastEpisodes } from './PodcastEpisodes';

export function Podcast() {
  const router = useRouter();
  const { formatMessage } = useIntl();

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
              <PodcastPreview {...podcast} />
            </Section.Content>
          </Section>

          <Section sx={{ flex: 0 }}>
            <Section.Header sx={{ top: 58 }}>
              <Title order={2}>
                {formatMessage({ id: 'podcast.lastEpisodes' })}
              </Title>
            </Section.Header>

            <Section.Content>
              <PodcastEpisodes {...podcast} />
            </Section.Content>
          </Section>
        </Status>
      </Section>
    </>
  );
}
