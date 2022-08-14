import { useIntl } from 'react-intl';
import { Title } from '@mantine/core';

import { Section } from 'src/components/UI';

import { useStyles } from './styles';

export function ShellSidebar() {
  const { classes } = useStyles();
  const { formatMessage } = useIntl();

  return (
    <Section>
      <Section.Header className={classes.header}>
        <Title order={2}>{formatMessage({ id: 'ui.playingNow' })}</Title>
      </Section.Header>
    </Section>
  );
}
