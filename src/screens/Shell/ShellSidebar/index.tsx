import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useMediaQuery } from '@mantine/hooks';
import { Stack, Title, useMantineTheme } from '@mantine/core';

import { Player } from 'src/screens/Player';
import { Section } from 'src/components/UI';
import { Playlist } from 'src/screens/Playlist';
import { useSidebar } from 'src/store/ui/hooks';

export function ShellSidebar() {
  const theme = useMantineTheme();
  const { formatMessage } = useIntl();

  const sidebar = useSidebar(({ actions }) => actions);

  const lg = useMediaQuery(`(max-width: ${theme.breakpoints.lg}px)`);

  useEffect(() => {
    sidebar.toggle(!lg);
  }, [lg]);

  return (
    <Section>
      <Section.Header>
        <Title order={2}>{formatMessage({ id: 'ui.playingNow' })}</Title>
      </Section.Header>

      <Section.Content>
        <Stack spacing="lg">
          <Player />
          <Playlist />
        </Stack>
      </Section.Content>
    </Section>
  );
}
