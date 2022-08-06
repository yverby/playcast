import { Box } from '@mantine/core';

import type { ReactNode } from 'react';

import { useStyles } from './styles';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className }: SectionProps) {
  const { cx, classes } = useStyles();

  return (
    <Box component="section" className={cx(classes.box, className)}>
      {children}
    </Box>
  );
}

Section.Header = function SectionHeader({ children, className }: SectionProps) {
  const { cx, classes } = useStyles();

  return (
    <Box p="xs" className={cx(classes.header, className)}>
      {children}
    </Box>
  );
};

Section.Content = function SectionContent({
  children,
  className,
}: SectionProps) {
  const { cx, classes } = useStyles();

  return (
    <Box p="xs" className={cx(classes.box, className)}>
      {children}
    </Box>
  );
};
