import { Text, Title } from '@mantine/core';

import type { TitleProps } from '@mantine/core';

import { useStyles } from './styles';

interface LogoProps extends TitleProps {
  short?: boolean;
}

export function Logo({ short, ...props }: LogoProps) {
  const { classes } = useStyles();

  return (
    <Title {...props}>
      <Text component="span" className={classes.play}>
        {short ? 'P' : 'Play'}
      </Text>

      <Text component="span" className={classes.cast}>
        {short ? 'c.' : 'cast.'}
      </Text>
    </Title>
  );
}
