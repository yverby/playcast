import { useMemo, useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Title, Center, Loader, SimpleGrid } from '@mantine/core';

import { filterBy } from 'src/lib/helpers';
import { Section } from 'src/components/UI';
import { EpisodeCard } from 'src/components/Episode';
import { ExploreForm } from 'src/components/Explore';
import { FIELD, ENTITY, BREAKPOINTS } from 'src/constants';
import { exploreActions } from 'src/store/explore/actions';
import { selectExploreEpisodes } from 'src/store/explore/selectors';

import type { ExploreEntityForm } from 'src/store/explore/types';

import { useStyles } from './styles';

const breakpoints = BREAKPOINTS[ENTITY.EPISODE];

export function ExploreEpisodes() {
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const { formatMessage } = useIntl();

  const episodes = useSelector(selectExploreEpisodes);

  const [values, setValues] = useState<ExploreEntityForm>();

  useEffect(() => {
    const payload = { [FIELD.LIMIT]: 50, [FIELD.COUNTRY]: 'us' };
    dispatch(exploreActions.episodes.request(payload));

    return () => {
      dispatch(exploreActions.episodes.cancel());
    };
  }, []);

  const list = useMemo(() => {
    const { [FIELD.ID]: id, [FIELD.TERM]: term } = { ...values };

    return filterBy(
      id?.length
        ? episodes.data.filter(({ genre }) => id.includes(String(genre?.id)))
        : episodes.data,
      ['name', 'collection.name'],
      (value) => value?.toLowerCase().includes(term)
    );
  }, [episodes.data, values]);

  return (
    <>
      <Section className={classes.sticky}>
        <Section.Header>
          <Title order={2}>{formatMessage({ id: 'ui.topEpisodes' })}</Title>
        </Section.Header>

        <Section.Content className={classes.form}>
          <ExploreForm
            onSubmit={setValues}
            genres={episodes.genres}
            disabled={!episodes.data}
          />
        </Section.Content>
      </Section>

      <Section>
        <Section.Content>
          {episodes.loading ? (
            <Center sx={{ flex: 1 }}>
              <Loader />
            </Center>
          ) : (
            <SimpleGrid breakpoints={breakpoints}>
              {list.map((episode) => (
                <EpisodeCard {...episode} key={episode.id} />
              ))}
            </SimpleGrid>
          )}
        </Section.Content>
      </Section>
    </>
  );
}
