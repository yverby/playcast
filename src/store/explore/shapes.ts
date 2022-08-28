import { z } from 'zod';

import { FIELD, ENTITY } from 'src/constants';

export const exploreEntityShape = z.object({
  [FIELD.LIMIT]: z.number(),
  [FIELD.COUNTRY]: z.string(),
  [FIELD.ENTITY]: z.nativeEnum(ENTITY).optional(),
});

export const exploreEntityFormShape = z.object({
  [FIELD.TERM]: z.string(),
  [FIELD.ID]: z.array(z.string()),
});
