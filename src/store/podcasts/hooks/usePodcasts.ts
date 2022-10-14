import { useMemo } from 'react';
import { useShallowEffect } from '@mantine/hooks';
import { useDispatch, useSelector } from 'react-redux';

import { podcastsActions } from 'src/store/podcasts/actions';
import {
  selectPodcastsCache,
  selectPodcastsDetails,
} from 'src/store/podcasts/selectors';

import type { PodcastsDetailsParams } from 'src/store/podcasts/types';

export function usePodcasts(params: PodcastsDetailsParams) {
  const dispatch = useDispatch();

  const cache = useSelector(selectPodcastsCache);
  const details = useSelector(selectPodcastsDetails);

  const id = useMemo(() => params.id.filter(Boolean), [params]);
  const data = useMemo(() => id.map((e) => cache[e]?.data), [id, cache]);

  useShallowEffect(() => {
    dispatch(podcastsActions.details.init({ id }));

    return () => {
      dispatch(podcastsActions.details.clear());
      dispatch(podcastsActions.details.cancel());
    };
  }, [id]);

  return { ...details, data: !details.loading ? data : [] };
}
