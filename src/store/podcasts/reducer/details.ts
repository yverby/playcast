import { createRequestReducer } from 'src/lib';
import { podcastsActions } from 'src/store/podcasts/actions';

import type { PodcastsDetailsResults } from 'src/store/podcasts/types';

export const podcastsDetailsReducer =
  createRequestReducer<PodcastsDetailsResults>(podcastsActions.details);
