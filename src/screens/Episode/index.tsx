import { useIntl } from 'react-intl';
import { Title } from '@mantine/core';
import { TbVinyl } from 'react-icons/tb';

import { Status, Section, Placeholder } from 'src/components/UI';

export function Episode() {
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
        <Title order={2}>{formatMessage({ id: 'ui.podcastEpisode' })}</Title>
      </Section.Header>

      <Section.Content>
        <Status views={{ nothing }}>{[]}</Status>
      </Section.Content>
    </Section>
  );
}
