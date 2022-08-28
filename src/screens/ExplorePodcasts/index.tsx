import { useMemo, useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Title, Center, Loader, SimpleGrid } from '@mantine/core';

import { filterBy } from 'src/lib/helpers';
import { Section } from 'src/components/UI';
import { PodcastCard } from 'src/components/Podcast';
import { ExploreForm } from 'src/components/Explore';
import { FIELD, ENTITY, BREAKPOINTS } from 'src/constants';
import { exploreActions } from 'src/store/explore/actions';
import { selectExplorePodcasts } from 'src/store/explore/selectors';

import type { ExploreEntityForm } from 'src/store/explore/types';

import { useStyles } from './styles';

const breakpoints = BREAKPOINTS[ENTITY.PODCAST];

export function ExplorePodcasts() {
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const { formatMessage } = useIntl();

  const podcasts = useSelector(selectExplorePodcasts);

  const [values, setValues] = useState<ExploreEntityForm>();

  useEffect(() => {
    const payload = { [FIELD.LIMIT]: 50, [FIELD.COUNTRY]: 'us' };
    dispatch(exploreActions.podcasts.request(payload));

    return () => {
      dispatch(exploreActions.podcasts.cancel());
    };
  }, []);

  const list = useMemo(() => {
    const { [FIELD.ID]: id, [FIELD.TERM]: term } = { ...values };

    return filterBy(
      id?.length
        ? podcasts.data.filter(({ genre }) => id.includes(String(genre.id)))
        : podcasts.data,
      ['name', 'artist.name'],
      (value) => value?.toLowerCase().includes(term)
    );
  }, [podcasts.data, values]);

  return (
    <>
      <Section className={classes.sticky}>
        <Section.Header>
          <Title order={2}>{formatMessage({ id: 'ui.topEpisodes' })}</Title>
        </Section.Header>

        <Section.Content className={classes.form}>
          <ExploreForm
            onSubmit={setValues}
            genres={podcasts.genres}
            disabled={!podcasts.data}
          />
        </Section.Content>
      </Section>

      <Section>
        <Section.Content>
          {podcasts.loading ? (
            <Center sx={{ flex: 1 }}>
              <Loader />
            </Center>
          ) : (
            <SimpleGrid breakpoints={breakpoints}>
              {list.map((podcast) => (
                <PodcastCard {...podcast} key={podcast.id} />
              ))}
            </SimpleGrid>
          )}
        </Section.Content>
      </Section>
    </>
  );
}
