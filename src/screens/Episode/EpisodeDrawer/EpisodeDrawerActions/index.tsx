import { useIntl } from 'react-intl';
import { Group, Button } from '@mantine/core';

import { usePlaylist } from 'src/store/ui/hooks';

import type { Episode } from 'src/store/podcasts/types';

export function EpisodeDrawerActions(episode: Episode) {
  const playlist = usePlaylist();
  const { formatMessage } = useIntl();

  const playEpisode = () => playlist.actions.next(episode);

  const [queueEpisode] = playlist.state.queue;
  const disabled = queueEpisode?.guid === episode.guid;

  return (
    <Group>
      <Button disabled={disabled} onClick={playEpisode} sx={{ width: '100%' }}>
        {disabled
          ? formatMessage({ id: 'ui.playingNow' })
          : formatMessage({ id: 'ui.playEpisode' })}
      </Button>
    </Group>
  );
}
