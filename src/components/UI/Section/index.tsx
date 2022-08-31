import { Box, Text } from '@mantine/core';

import type { ReactNode } from 'react';
import type { BoxProps } from '@mantine/core';
import type { PolymorphicComponentProps } from '@mantine/utils';

import { useStyles } from './styles';

type SectionProps<C = 'div'> = PolymorphicComponentProps<C, BoxProps>;

export function Section({
  children,
  className,
  ...props
}: SectionProps<'section'>) {
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
  rightContent,
  ...props
}: SectionProps<'header'> & { rightContent?: ReactNode }) {
  const { cx, classes } = useStyles();

  return (
    <Box
      component="header"
      className={cx(classes.header, className)}
      {...props}
    >
      <Text lineClamp={1}>{children}</Text>
      {rightContent}
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
    <Box className={cx(classes.section, classes.content, className)} {...props}>
      {children}
    </Box>
  );
};
