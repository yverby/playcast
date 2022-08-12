import { z } from 'zod';

import { ENTITY } from 'src/constants';

export const searchParamsShape = z.object({
  term: z.string(),
  entity: z.nativeEnum(ENTITY),
  limit: z.number().optional(),
  offset: z.number().optional(),
});
