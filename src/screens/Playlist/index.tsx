import { Paper, Stack } from '@mantine/core';

import { usePlaylist } from 'src/store/ui/hooks';
import { PlaylistItem } from 'src/components/Playlist';

export function Playlist() {
  const playlist = usePlaylist(({ state }) => state);

  if (!playlist.queue.length) {
    return null;
  }

  return (
    <Paper p="md">
      <Stack spacing="md">
        {playlist.queue.map((episode, index) => (
          <PlaylistItem key={episode.guid} order={index + 1} {...episode} />
        ))}
      </Stack>
    </Paper>
  );
}
