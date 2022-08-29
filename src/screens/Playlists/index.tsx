import { useIntl } from 'react-intl';
import { Title } from '@mantine/core';
import { TbVinyl } from 'react-icons/tb';

import { Status, Section, Placeholder } from 'src/components/UI';

export function Playlists() {
  const { formatMessage } = useIntl();

  const nothing = (
    <Placeholder
      icon={TbVinyl}
      title={formatMessage({ id: 'ui.comingSoon' })}
    />
  );

  return (
    <Section>
      <Section.Header>
        <Title order={2}>{formatMessage({ id: 'ui.playlists' })}</Title>
      </Section.Header>

      <Section.Content>
        <Status views={{ nothing }}>{[]}</Status>
      </Section.Content>
    </Section>
  );
}
