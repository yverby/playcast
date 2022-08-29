import { createStyles } from '@mantine/core';

export const useStyles = createStyles((_, isMore: boolean) => ({
  status: {
    flex: 1,
    ...(isMore && { paddingTop: 10 }),
  },
}));
