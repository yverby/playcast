import { Text, Title } from '@mantine/core';

import { useStyles } from './styles';

interface LogoProps {
  short?: boolean;
}

export function Logo({ short }: LogoProps) {
  const { classes } = useStyles();

  return (
    <Title>
      <Text component="span" className={classes.play}>
        {short ? 'P' : 'Play'}
      </Text>

      <Text component="span" className={classes.cast}>
        {short ? 'c.' : 'cast.'}
      </Text>
    </Title>
  );
}
