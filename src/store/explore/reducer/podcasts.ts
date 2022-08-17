import { createRequestReducer } from 'src/lib';

import { exploreActions } from 'src/store/explore/actions';

import type { Podcast } from 'src/store/podcasts/types';
import type { ExploreEntityResults } from 'src/store/explore/types';

export const explorePodcastsReducer = createRequestReducer<
  ExploreEntityResults<Podcast>
>(exploreActions.podcasts);
