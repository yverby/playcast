import { sortBy, uniqBy } from 'lodash';

import { createRequestReducer } from 'src/lib';
import { exploreActions } from 'src/store/explore/actions';

import type { Episode } from 'src/store/podcasts/types';
import type { ExploreEntityResults } from 'src/store/explore/types';

export const exploreEpisodesReducer = createRequestReducer<
  ExploreEntityResults<Episode>
>(exploreActions.episodes, (builder) => {
  builder.addMatcher(
    ({ type }) => type === exploreActions.episodes.success.type,
    (state) => ({
      ...state,
      genres: sortBy(
        uniqBy(
          state.data.map(({ genre }) => ({
            value: String(genre?.id),
            label: String(genre?.name),
          })),
          'value'
        ),
        'label'
      ),
    })
  );
});
