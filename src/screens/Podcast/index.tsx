import { useRouter } from 'next/router';
import { Text, Title } from '@mantine/core';

import { Section } from 'src/components/UI';

export function Podcast() {
  const { query } = useRouter();

  return (
    <Section>
      <Section.Header>
        <Title order={2}>Podcast ID: {query.id}</Title>
      </Section.Header>

      <Section.Content>
        <Text size="sm">Podcast ID: {query.id}</Text>
      </Section.Content>
    </Section>
  );
}
