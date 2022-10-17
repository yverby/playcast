import { useIntl } from 'react-intl';
import { useMediaQuery } from '@mantine/hooks';
import { TbLayoutSidebarRight } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { Indicator, useMantineTheme } from '@mantine/core';

import { Control } from 'src/components/UI';
import { usePlayer } from 'src/store/ui/hooks';
import { uiActions } from 'src/store/ui/actions';
import { selectUiSidebar } from 'src/store/ui/selectors';

export function ShellOptions() {
  const dispatch = useDispatch();
  const { formatMessage } = useIntl();

  const sidebar = useSelector(selectUiSidebar);

  const { status } = usePlayer();
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
            active={sidebar.visible}
            icon={TbLayoutSidebarRight}
            onClick={() => dispatch(uiActions.sidebar.toggle())}
            {...(!md && { title: formatMessage({ id: 'ui.playingNow' }) })}
          />
        </Indicator>
      )}
    </>
  );
}
