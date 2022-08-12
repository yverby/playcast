import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { Title } from '@mantine/core';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { Section } from 'src/components/UI';
import { searchActions } from 'src/store/search/actions';
import { searchParamsShape } from 'src/store/search/shapes';

export function Search() {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const { formatMessage } = useIntl();

  useEffect(() => {
    const params = searchParamsShape.safeParse(query);

    if (params.success) {
      dispatch(searchActions.results.init(params.data));
    }

    return () => {
      dispatch(searchActions.results.cancel());
    };
  }, [query]);

  return (
    <Section>
      <Section.Header>
        <Title order={2}>{formatMessage({ id: 'ui.search' })}</Title>
      </Section.Header>
    </Section>
  );
}
