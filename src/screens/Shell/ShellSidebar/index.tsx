import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useMediaQuery, useScrollLock } from '@mantine/hooks';
import { Stack, Title, useMantineTheme } from '@mantine/core';

import { Section } from 'src/components/UI';
import { useShellSidebar } from 'src/store/shell/hooks';

import { ShellPlayer } from './ShellPlayer';
import { ShellPlaylist } from './ShellPlaylist';

export function ShellSidebar() {
  const intl = useIntl();
  const theme = useMantineTheme();
  const sidebar = useShellSidebar();

  const [, lockScroll] = useScrollLock(false);
  
  const lg = useMediaQuery(`(max-width: ${theme.breakpoints.lg}px)`);
  const xs = useMediaQuery(`(max-width: ${theme.breakpoints.xs}px)`);

  useEffect(() => {
    sidebar.actions.toggle(!lg);
  }, [lg]);

  useEffect(() => {
    lockScroll(xs && sidebar.state.visible);
  }, [xs, sidebar.state.visible]);

  return (
    <Section>
      <Section.Header>
        <Title order={2}>{intl.formatMessage({ id: 'ui.playingNow' })}</Title>
      </Section.Header>

      <Section.Content>
        <Stack spacing="lg">
          <ShellPlayer />
          <ShellPlaylist />
        </Stack>
      </Section.Content>
    </Section>
  );
}
