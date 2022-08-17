import { z } from 'zod';

import { exploreEntityShape } from './shapes';

export type ExploreEntityParams = z.infer<typeof exploreEntityShape>;

export interface ExploreEntityResults<T> {
  data: T[];
}
