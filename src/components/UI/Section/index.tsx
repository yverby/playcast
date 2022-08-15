import { Box } from '@mantine/core';

import type { BoxProps } from '@mantine/core';

import { useStyles } from './styles';

type SectionProps<C = 'div'> =
  import('@mantine/utils').PolymorphicComponentProps<C, BoxProps>;

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
  ...props
}: SectionProps<'header'>) {
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
    <Box className={cx(classes.section, classes.content, className)} {...props}>
      {children}
    </Box>
  );
};
