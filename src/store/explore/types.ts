import { z } from 'zod';

import type { SelectItem } from '@mantine/core';

import { exploreEntityShape, exploreEntityFormShape } from './shapes';

export type ExploreEntityForm = z.infer<typeof exploreEntityFormShape>;

export type ExploreEntityParams = z.infer<typeof exploreEntityShape>;

export interface ExploreEntityResults<T> {
  data: T[];
  genres: (string | SelectItem)[];
}
