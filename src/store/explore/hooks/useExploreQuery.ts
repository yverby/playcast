import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import { ENTITY } from 'src/constants';
import { explore } from 'src/store/explore/requests';

export function useExploreQuery<T>(entity: ENTITY) {
  useEffect(() => explore.entity.cancel, []);

  return useQuery<T>(
    ['explore', entity],
    () => explore.entity({ entity }) as Promise<T>,
    {
      enabled: Boolean(entity),
      staleTime: 1000 * 60 * 60,
    }
  );
}
