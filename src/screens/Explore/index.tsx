import { useIntl } from 'react-intl';
import { Title } from '@mantine/core';

import { Section } from 'src/components/UI';

export function Explore() {
  const { formatMessage } = useIntl();

  return (
    <Section>
      <Section.Header>
        <Title order={2}>{formatMessage({ id: 'ui.explore' })}</Title>
      </Section.Header>
    </Section>
  );
}
