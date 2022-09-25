import { format } from 'date-fns';
import { useIntl } from 'react-intl';
import { Divider, Group } from '@mantine/core';

import { FORMAT } from 'src/constants';
import { Caption } from 'src/components/UI';
import { formatDuration } from 'src/lib/helpers';

import type { Episode } from 'src/store/podcasts/types';

export function EpisodeDrawerCaption({ date, source }: Episode) {
  const { formatMessage } = useIntl();

  return (
    <Group>
      <Caption title={formatMessage({ id: 'ui.date' })}>
        {format(new Date(date), FORMAT.DATE.EPISODE)}
      </Caption>

      <Divider orientation="vertical" />

      <Caption title={formatMessage({ id: 'ui.duration' })}>
        {formatDuration(source.time)}
      </Caption>
    </Group>
  );
}
