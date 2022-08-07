import { useIntl } from 'react-intl';
import { Title } from '@mantine/core';

import { Section } from 'src/components/UI';

export function Settings() {
  const { formatMessage } = useIntl();

  return (
    <Section>
      <Section.Header>
        <Title order={2}>{formatMessage({ id: 'ui.settings' })}</Title>
      </Section.Header>
    </Section>
  );
}
