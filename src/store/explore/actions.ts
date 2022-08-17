import { ENTITY, FIELD } from 'src/constants';
import { createRequestActions } from 'src/lib';

import type { ExploreEntityParams } from './types';

function withType(type: string) {
  return `EXPLORE/${type}`;
}

export const exploreActions = {
  podcasts: createRequestActions<ExploreEntityParams>(
    withType('PODCASTS'),
    (params) => ({
      payload: {
        url: '/explore',
        params: { ...params, [FIELD.ENTITY]: ENTITY.PODCAST },
      },
      meta: { cancelable: true },
    })
  ),
  episodes: createRequestActions<ExploreEntityParams>(
    withType('EPISODES'),
    (params) => ({
      payload: {
        url: '/explore',
        params: { ...params, [FIELD.ENTITY]: ENTITY.EPISODE },
      },
      meta: { cancelable: true },
    })
  ),
};
