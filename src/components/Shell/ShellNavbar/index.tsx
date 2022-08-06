import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';

import { Logo, Section } from 'src/components/UI';

export function ShellNavbar() {
  const theme = useMantineTheme();
  const isMaxMd = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);

  return (
    <Section>
      <Section.Header>
        <Logo short={isMaxMd} />
      </Section.Header>
    </Section>
  );
}
