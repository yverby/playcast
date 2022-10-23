import { FIELD } from 'src/constants';
import { createRequest } from 'src/lib';

import type { ExploreEntityParams } from 'src/store/explore/types';

const defaultParams = { [FIELD.LIMIT]: 100, [FIELD.COUNTRY]: 'ua' };

export const explore = {
  entity: createRequest<ExploreEntityParams, any[]>(({ entity }) => ({
    url: '/explore',
    params: { ...defaultParams, [FIELD.ENTITY]: entity },
  })),
};
