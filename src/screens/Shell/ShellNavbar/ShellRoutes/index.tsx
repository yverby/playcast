import { useMemo } from 'react';
import { entries } from 'lodash';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import { TbSearch, TbSettings, TbPlaylist, TbLayoutGrid } from 'react-icons/tb';

import { ROUTE } from 'src/constants';

import { Control } from 'src/components/UI';

const ROUTES = {
  [ROUTE.SEARCH]: TbSearch,
  [ROUTE.EXPLORE.ROOT]: TbLayoutGrid,
  [ROUTE.PLAYLISTS]: TbPlaylist,
  [ROUTE.SETTINGS]: TbSettings,
};

export function ShellRoutes() {
  const router = useRouter();
  const theme = useMantineTheme();
  const { formatMessage } = useIntl();

  const md = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);

  const routes = useMemo(
    () =>
      entries(ROUTES).map(([route, icon]) => ({
        icon,
        onClick: () => router.push(route),
        active: router.pathname.includes(route),
        title: formatMessage({ id: `ui.${route.replace('/', '')}` }),
      })),
    [router.pathname]
  );

  return (
    <>
      {routes.map(({ icon, title, active, onClick }) => (
        <Control
          key={title}
          icon={icon}
          active={active}
          onClick={onClick}
          {...(!md && { title })}
        />
      ))}
    </>
  );
}
