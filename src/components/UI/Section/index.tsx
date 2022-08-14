import { Box } from '@mantine/core';

import type { ReactNode } from 'react';
import type { DefaultProps } from '@mantine/core';

import { useStyles } from './styles';

interface SectionProps extends DefaultProps {
  children: ReactNode;
}

export function Section({ children, className, ...props }: SectionProps) {
  const { cx, classes } = useStyles();

  return (
    <Box
      component="section"
      className={cx(classes.section, className)}
      {...props}
    >
      {children}
    </Box>
  );
}

Section.Header = function SectionHeader({
  children,
  className,
  ...props
}: SectionProps) {
  const { cx, classes } = useStyles();

  return (
    <Box
      component="header"
      className={cx(classes.header, className)}
      {...props}
    >
      {children}
    </Box>
  );
};

Section.Content = function SectionContent({
  children,
  className,
  ...props
}: SectionProps) {
  const { cx, classes } = useStyles();

  return (
    <Box
      component="div"
      className={cx(classes.section, classes.content, className)}
      {...props}
    >
      {children}
    </Box>
  );
};
