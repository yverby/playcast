import { Text, Title, Center } from '@mantine/core';

import useStyles from './styles';

export function Index() {
  const { classes } = useStyles();

  return (
    <Center className={classes.center}>
      <Title>
        <Text component="span" className={classes.play}>
          Play
        </Text>
        <Text component="span">cast.</Text>
      </Title>
    </Center>
  );
}
