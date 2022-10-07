import { useIntl } from 'react-intl';
import { Group, Button } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from 'src/store/ui/actions';
import { selectUiPlaylist } from 'src/store/ui/selectors';

import type { Episode } from 'src/store/podcasts/types';

export function EpisodeDrawerActions(episode: Episode) {
  const dispatch = useDispatch();
  const { formatMessage } = useIntl();

  const [ep] = useSelector(selectUiPlaylist);

  const playEpisode = () => dispatch(uiActions.playlist.next(episode));

  return (
    <Group>
      <Button
        onClick={playEpisode}
        sx={{ width: '100%' }}
        disabled={ep?.guid === episode.guid}
      >
        {formatMessage({ id: 'ui.playEpisode' })}
      </Button>
    </Group>
  );
}
