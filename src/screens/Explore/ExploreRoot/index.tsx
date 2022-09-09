import Head from 'next/head';
import { useIntl } from 'react-intl';

import { BRAND } from 'src/constants';

import { ExploreRootPodcasts } from './ExploreRootPodcasts';
import { ExploreRootEpisodes } from './ExploreRootEpisodes';

export function ExploreRoot() {
  const { formatMessage } = useIntl();

  return (
    <>
      <Head>
        <title>
          {formatMessage({ id: 'ui.explore' })} / {BRAND.NAME}
        </title>
      </Head>

      <ExploreRootPodcasts />
      <ExploreRootEpisodes />
    </>
  );
}
