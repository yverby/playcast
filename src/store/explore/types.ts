import { z } from 'zod';

import type { SelectItem } from '@mantine/core';

import { exploreFormShape, exploreEntityShape } from './shapes';

export type ExploreFormValues = z.infer<typeof exploreFormShape>;

export type ExploreEntityParams = z.infer<typeof exploreEntityShape>;

export interface ExploreEntityResults<T> {
  data: T[];
  genres: SelectItem[];
}
