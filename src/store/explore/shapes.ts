import { z } from 'zod';

import { FIELD, ENTITY } from 'src/constants';

export const exploreEntityShape = z.object({
  [FIELD.COUNTRY]: z.string(),
  [FIELD.LIMIT]: z.number().optional(),
  [FIELD.ENTITY]: z.nativeEnum(ENTITY).optional(),
});

export const exploreEntityFormShape = z.object({
  [FIELD.TERM]: z.string(),
  [FIELD.ID]: z.array(z.string()),
});
