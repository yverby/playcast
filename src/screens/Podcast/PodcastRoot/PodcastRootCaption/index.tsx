import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import { Box, Text, Group, Stack } from '@mantine/core';

import { DRAWER } from 'src/constants';
import { stripTags } from 'src/lib/helpers';
import { uiActions } from 'src/store/ui/actions';

import type { Podcast } from 'src/store/podcasts/types';

import { useStyles } from './styles';

export function PodcastRootCaption({
  genre,
  summary,
  language,
  description,
  ...podcast
}: Podcast) {
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const { formatMessage } = useIntl();

  const openDetails = () => {
    dispatch(
      uiActions.drawer.open(DRAWER.PODCAST, {
        genre,
        summary,
        language,
        description,
        ...podcast,
      })
    );
  };

  return (
    <Box component="button" className={classes.caption} onClick={openDetails}>
      <Stack align="center">
        <Group spacing="md">
          <Text>
            <Box component="span" className={classes.title}>
              {formatMessage({ id: 'ui.language' })}:{' '}
            </Box>

            <Box component="span" className={classes.value}>
              {language?.toUpperCase()}
            </Box>
          </Text>

          <Text>
            <Box component="span" className={classes.title}>
              {formatMessage({ id: 'ui.genre' })}:{' '}
            </Box>

            <Box component="span" className={classes.value}>
              {genre.name}
            </Box>
          </Text>
        </Group>

        <Text align="center" className={classes.title} lineClamp={2}>
          {stripTags(summary || description)}
        </Text>
      </Stack>
    </Box>
  );
}
