import { useMemo, useState } from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { Title, SimpleGrid } from '@mantine/core';

import { filterBy } from 'src/lib/helpers';
import { Status, Section } from 'src/components/UI';
import { EpisodeCard } from 'src/components/Episode';
import { ExploreForm } from 'src/components/Explore';
import { exploreActions } from 'src/store/explore/actions';
import { useEntityRequest } from 'src/store/explore/hooks';
import { FIELD, ENTITY, BREAKPOINTS } from 'src/constants';
import { selectExploreEpisodes } from 'src/store/explore/selectors';

import type { Genre } from 'src/store/podcasts/types';
import type { ExploreEntityForm } from 'src/store/explore/types';

import { useStyles } from './styles';

const breakpoints = BREAKPOINTS[ENTITY.EPISODE];

export function ExploreEpisodes() {
  const { classes } = useStyles();
  const { formatMessage } = useIntl();

  const episodes = useSelector(selectExploreEpisodes);
  const [values, setValues] = useState<ExploreEntityForm>();

  const { data: allEpisodes } = episodes;
  const { [FIELD.ID]: id, [FIELD.TERM]: term } = { ...values };

  useEntityRequest(exploreActions.episodes, episodes);

  const genreEpisodes = useMemo(() => {
    if (id?.length) {
      const predicate = (genre: Genre) => id.includes(String(genre.id));
      return filterBy(allEpisodes, ['genre'], predicate);
    }
    return allEpisodes;
  }, [allEpisodes, id]);

  const termEpisodes = useMemo(() => {
    if (term) {
      const predicate = (value: string) => value.toLowerCase().includes(term);
      return filterBy(genreEpisodes, ['name', 'collection.name'], predicate);
    }
    return genreEpisodes;
  }, [genreEpisodes, term]);

  return (
    <>
      <Section className={classes.sticky}>
        <Section.Header>
          <Title order={2}>{formatMessage({ id: 'ui.popularEpisodes' })}</Title>
        </Section.Header>

        {episodes.data && (
          <Section.Content className={classes.form}>
            <ExploreForm onSubmit={setValues} genres={episodes.genres} />
          </Section.Content>
        )}
      </Section>

      <Section>
        <Section.Content>
          <Status selectors={{ ...episodes, data: termEpisodes }}>
            <SimpleGrid breakpoints={breakpoints}>
              {termEpisodes?.map((episode) => (
                <EpisodeCard {...episode} key={episode.id} />
              ))}
            </SimpleGrid>
          </Status>
        </Section.Content>
      </Section>
    </>
  );
}
