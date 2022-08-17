import { createRequestReducer } from 'src/lib';

import { exploreActions } from 'src/store/explore/actions';

import type { Episode } from 'src/store/podcasts/types';
import type { ExploreEntityResults } from 'src/store/explore/types';

export const exploreEpisodesReducer = createRequestReducer<
  ExploreEntityResults<Episode>
>(exploreActions.episodes);
