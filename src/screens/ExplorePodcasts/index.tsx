import { useMemo, useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { Title, SimpleGrid } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';

import { filterBy } from 'src/lib/helpers';
import { Status, Section } from 'src/components/UI';
import { PodcastCard } from 'src/components/Podcast';
import { ExploreForm } from 'src/components/Explore';
import { exploreActions } from 'src/store/explore/actions';
import { FIELD, ENTITY, BREAKPOINTS } from 'src/constants';
import { selectExplorePodcasts } from 'src/store/explore/selectors';

import type { Genre } from 'src/store/podcasts/types';
import type { ExploreEntityForm } from 'src/store/explore/types';

import { useStyles } from './styles';

const breakpoints = BREAKPOINTS[ENTITY.PODCAST];

export function ExplorePodcasts() {
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const { formatMessage } = useIntl();

  const podcasts = useSelector(selectExplorePodcasts);
  const [values, setValues] = useState<ExploreEntityForm>();

  const { data: allPodcasts } = podcasts;
  const { [FIELD.ID]: id, [FIELD.TERM]: term } = { ...values };

  useEffect(() => {
    dispatch(exploreActions.podcasts.init());
  }, []);

  const genrePodcasts = useMemo(() => {
    if (id?.length) {
      const predicate = (genre: Genre) => id.includes(String(genre.id));
      return filterBy(allPodcasts, ['genre'], predicate);
    }
    return allPodcasts;
  }, [allPodcasts, id]);

  const termPodcasts = useMemo(() => {
    if (term) {
      const predicate = (value: string) => value.toLowerCase().includes(term);
      return filterBy(genrePodcasts, ['name', 'artist.name'], predicate);
    }
    return genrePodcasts;
  }, [genrePodcasts, term]);

  return (
    <>
      <Section className={classes.sticky}>
        <Section.Header>
          <Title order={2}>{formatMessage({ id: 'ui.popularPodcasts' })}</Title>
        </Section.Header>

        {podcasts.data && (
          <Section.Content className={classes.form}>
            <ExploreForm onSubmit={setValues} genres={podcasts.genres} />
          </Section.Content>
        )}
      </Section>

      <Section>
        <Section.Content>
          <Status selectors={{ ...podcasts, data: termPodcasts }}>
            <SimpleGrid breakpoints={breakpoints}>
              {termPodcasts?.map((podcast) => (
                <PodcastCard {...podcast} key={podcast.id} />
              ))}
            </SimpleGrid>
          </Status>
        </Section.Content>
      </Section>
    </>
  );
}
