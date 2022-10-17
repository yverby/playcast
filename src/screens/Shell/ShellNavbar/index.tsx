import { useMediaQuery } from '@mantine/hooks';
import { Stack, useMantineColorScheme } from '@mantine/core';

import { Logo, Section } from 'src/components/UI';

import { ShellRoutes } from './ShellRoutes';
import { ShellOptions } from './ShellOptions';

import { useStyles } from './styles';

export function ShellNavbar() {
  const { theme, classes } = useStyles();
  const { toggleColorScheme } = useMantineColorScheme();

  const md = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  return (
    <Section>
      {!sm && (
        <Section.Header className={classes.header}>
          <Logo short={md} align="center" onClick={() => toggleColorScheme()} />
        </Section.Header>
      )}

      <Section.Content>
        <Stack spacing="lg" className={classes.stack}>
          <Stack spacing="xs" className={classes.stack}>
            <ShellRoutes />
          </Stack>

          <Stack spacing="xs" className={classes.stack}>
            <ShellOptions />
          </Stack>
        </Stack>
      </Section.Content>
    </Section>
  );
}
