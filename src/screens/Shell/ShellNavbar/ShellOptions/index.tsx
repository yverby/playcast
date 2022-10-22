import { useIntl } from 'react-intl';
import { useMediaQuery } from '@mantine/hooks';
import { TbLayoutSidebarRight } from 'react-icons/tb';
import { Indicator, useMantineTheme } from '@mantine/core';

import { Control } from 'src/components/UI';
import { usePlayer, useSidebar } from 'src/store/ui/hooks';

export function ShellOptions() {
  const sidebar = useSidebar();
  const { status } = usePlayer();
  const { formatMessage } = useIntl();

  const theme = useMantineTheme();

  const lg = useMediaQuery(`(max-width: ${theme.breakpoints.lg}px)`);
  const md = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  return (
    <>
      {lg && (
        <Indicator
          disabled={!status.ready}
          position={sm ? 'top-center' : 'middle-end'}
          color={theme.other.variable(
            theme,
            status.playing ? 'colorPrimary' : 'colorPlaceholder'
          )}
        >
          <Control
            icon={TbLayoutSidebarRight}
            active={sidebar.state.visible}
            onClick={() => sidebar.actions.toggle()}
            {...(!md && { title: formatMessage({ id: 'ui.playingNow' }) })}
          />
        </Indicator>
      )}
    </>
  );
}
