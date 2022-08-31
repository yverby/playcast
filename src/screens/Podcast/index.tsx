import { Title } from '@mantine/core';
import { useRouter } from 'next/router';

import { Status, Section } from 'src/components/UI';
import { usePodcasts } from 'src/store/podcasts/hooks';

export function Podcast() {
  const { query } = useRouter();

  const podcasts = usePodcasts({ id: [query.id as string] });

  const [podcast] = podcasts.data;

  return (
    <Section>
      <Section.Header>
        <Title order={2}>
          {podcasts.loading ? 'Loading...' : podcast?.name}
        </Title>
      </Section.Header>

      <Section.Content>
        <Status selectors={{ ...podcasts, data: podcast }}>{[]}</Status>
      </Section.Content>
    </Section>
  );
}
