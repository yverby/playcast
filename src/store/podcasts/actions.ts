import { createRequestActions } from 'src/lib';

import type { PodcastsDetailsParams, PodcastsDetailsResults } from './types';

function withType(type: string) {
  return `PODCASTS/${type}`;
}

export const podcastsActions = {
  details: createRequestActions<PodcastsDetailsParams, PodcastsDetailsResults>(
    withType('DETAILS'),
    ({ id }) => ({
      payload: { url: '/podcasts', params: { id: id.join(',') } },
      meta: { cancelable: true },
    })
  ),
};
