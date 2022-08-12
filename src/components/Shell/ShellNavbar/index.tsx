import { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@mantine/hooks';
import { TbSearch, TbSettings, TbPlaylist, TbLayoutGrid } from 'react-icons/tb';
import {
  Box,
  Stack,
  UnstyledButton,
  useMantineColorScheme,
} from '@mantine/core';

import { ROUTE } from 'src/constants';
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
  const { formatMessage } = useIntl();
  const { cx, theme, classes } = useStyles();
  const { toggleColorScheme } = useMantineColorScheme();

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

  const renderItem = (
    { icon: Icon, active, title, onClick }: any,
    key: number
  ) => (
    <UnstyledButton
      key={key}
      onClick={onClick}
      aria-label={title}
      className={cx(classes.button, { [classes.active]: active })}
    >
      <Icon size={17} />
      {!isMaxMd && <Box component="span">{title}</Box>}
    </UnstyledButton>
  );

  return (
    <Section>
      {!isMaxSm && (
        <Section.Header>
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
        </Stack>
      </Section.Content>
    </Section>
  );
}
