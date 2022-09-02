import { useIntl } from 'react-intl';
import { Title } from '@mantine/core';
import { TbVinyl } from 'react-icons/tb';

import { Status, Section, Placeholder } from 'src/components/UI';

export function Settings() {
  const { formatMessage } = useIntl();

  const nothing = (
    <Placeholder
      icon={TbVinyl}
      title={formatMessage({ id: 'message.comingSoon' })}
    />
  );

  return (
    <Section>
      <Section.Header>
        <Title order={2}>{formatMessage({ id: 'ui.settings' })}</Title>
      </Section.Header>

      <Section.Content>
        <Status views={{ nothing }}>{[]}</Status>
      </Section.Content>
    </Section>
  );
}
