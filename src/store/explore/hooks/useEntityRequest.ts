import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isAfter, addMinutes } from 'date-fns';

import { FIELD } from 'src/constants';
import { exploreActions } from 'src/store/explore/actions';
import {
  selectExplorePodcasts,
  selectExploreEpisodes,
} from 'src/store/explore/selectors';

type Actions = typeof exploreActions.podcasts | typeof exploreActions.episodes;
type Selectors = typeof selectExplorePodcasts | typeof selectExploreEpisodes;

export function useEntityRequest(
  actions: Actions,
  { timestamp }: ReturnType<Selectors>
) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAfter(new Date(), addMinutes(timestamp || 0, 60))) {
      dispatch(actions.request({ [FIELD.LIMIT]: 50, [FIELD.COUNTRY]: 'us' }));
    }

    return () => {
      dispatch(actions.cancel());
    };
  }, []);
}
