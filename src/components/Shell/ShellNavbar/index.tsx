import { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@mantine/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { selectUiSidebar } from 'src/store/ui/selectors';
import { Box, Stack, Button, useMantineColorScheme } from '@mantine/core';
import {
  TbSearch,
  TbSettings,
  TbPlaylist,
  TbLayoutGrid,
  TbLayoutSidebarRight,
} from 'react-icons/tb';

import { ROUTE } from 'src/constants';
import { uiActions } from 'src/store/ui/actions';
import { Logo, Section } from 'src/components/UI';

import { useStyles } from './styles';

const ROUTES = {
  [ROUTE.SEARCH]: TbSearch,
  [ROUTE.EXPLORE]: TbLayoutGrid,
  [ROUTE.PLAYLISTS]: TbPlaylist,
  [ROUTE.SETTINGS]: TbSettings,
};

export function ShellNavbar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { formatMessage } = useIntl();

  const { cx, theme, classes } = useStyles();
  const { toggleColorScheme } = useMantineColorScheme();

  const sidebar = useSelector(selectUiSidebar);

  const isMaxLg = useMediaQuery(`(max-width: ${theme.breakpoints.lg}px)`);
  const isMaxMd = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
  const isMaxSm = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  const routes = useMemo(
    () =>
      Object.entries(ROUTES).map(([route, icon]) => ({
        icon,
        onClick: () => router.push(route),
        active: router.pathname.includes(route),
        title: formatMessage({ id: `ui.${route.replace('/', '')}` }),
      })),
    [router.pathname]
  );

  const options = useMemo(
    () => [
      {
        active: sidebar.visible,
        icon: TbLayoutSidebarRight,
        title: formatMessage({ id: 'ui.playingNow' }),
        onClick: () => dispatch(uiActions.sidebar.toggle()),
      },
    ],
    [sidebar.visible]
  );

  const renderItem = (
    { icon: Icon, active, title, onClick }: any,
    key: number
  ) => (
    <Button
      key={key}
      onClick={onClick}
      aria-label={title}
      classNames={{
        root: cx(classes.button, { [classes.inactive]: !active }),
        inner: classes.inner,
        label: classes.label,
      }}
    >
      <Icon size={17} strokeWidth={2.25} />

      {!isMaxMd && <Box component="span">{title}</Box>}
    </Button>
  );

  return (
    <Section>
      {!isMaxSm && (
        <Section.Header className={classes.header}>
          <Logo
            align="center"
            short={isMaxMd}
            sx={{ width: '100%' }}
            onClick={() => toggleColorScheme()}
          />
        </Section.Header>
      )}

      <Section.Content>
        <Stack spacing="md" className={classes.stack}>
          <Stack spacing="xs" className={classes.stack}>
            {routes.map(renderItem)}
          </Stack>

          {isMaxLg && (
            <Stack spacing="xs" className={classes.stack}>
              {options.map(renderItem)}
            </Stack>
          )}
        </Stack>
      </Section.Content>
    </Section>
  );
}
