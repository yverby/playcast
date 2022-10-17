import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from '@mantine/hooks';
import { Title, useMantineTheme } from '@mantine/core';

import { Player } from 'src/screens/Player';
import { Section } from 'src/components/UI';
import { uiActions } from 'src/store/ui/actions';

export function ShellSidebar() {
  const dispatch = useDispatch();
  const theme = useMantineTheme();
  const { formatMessage } = useIntl();

  const lg = useMediaQuery(`(max-width: ${theme.breakpoints.lg}px)`);

  useEffect(() => {
    dispatch(uiActions.sidebar.toggle(!lg));
  }, [lg]);

  return (
    <Section>
      <Section.Header>
        <Title order={2}>{formatMessage({ id: 'ui.playingNow' })}</Title>
      </Section.Header>

      <Section.Content>
        <Player />
      </Section.Content>
    </Section>
  );
}
