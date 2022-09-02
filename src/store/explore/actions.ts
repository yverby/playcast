import { ENTITY, FIELD } from 'src/constants';
import { createRequestActions } from 'src/lib';

function withType(type: string) {
  return `EXPLORE/${type}`;
}

const defaultsParams = { [FIELD.LIMIT]: 100, [FIELD.COUNTRY]: 'us' };

export const exploreActions = {
  podcasts: createRequestActions(withType('PODCASTS'), () => ({
    payload: {
      url: '/explore',
      params: { ...defaultsParams, [FIELD.ENTITY]: ENTITY.PODCAST },
    },
  })),
  episodes: createRequestActions(withType('EPISODES'), () => ({
    payload: {
      url: '/explore',
      params: { ...defaultsParams, [FIELD.ENTITY]: ENTITY.EPISODE },
    },
  })),
};
