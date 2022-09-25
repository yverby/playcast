import Head from 'next/head';
import { useIntl } from 'react-intl';

import { BRAND } from 'src/constants';

import { ExplorePagePodcasts } from './ExplorePagePodcasts';
import { ExplorePageEpisodes } from './ExplorePageEpisodes';

export function ExplorePage() {
  const { formatMessage } = useIntl();

  return (
    <>
      <Head>
        <title>
          {formatMessage({ id: 'ui.explore' })} / {BRAND.NAME}
        </title>
      </Head>

      <ExplorePagePodcasts />
      <ExplorePageEpisodes />
    </>
  );
}
