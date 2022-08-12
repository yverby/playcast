import { z } from 'zod';

import { searchParamsShape } from './shapes';

export type SearchParams = z.infer<typeof searchParamsShape>;

export interface SearchResults {
  data: any[];
}
