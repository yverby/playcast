import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import { Text, Paper, Group, Stack, Divider } from '@mantine/core';

import { DRAWER } from 'src/constants';
import { Caption } from 'src/components/UI';
import { stripTags } from 'src/lib/helpers';
import { uiActions } from 'src/store/ui/actions';

import type { Podcast } from 'src/store/podcasts/types';

import { useStyles } from './styles';

export function PodcastPageCaption({
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
    <Paper component="button" className={classes.caption} onClick={openDetails}>
      <Stack>
        <Group>
          <Caption title={formatMessage({ id: 'ui.genre' })}>
            {genre.name}
          </Caption>

          <Divider orientation="vertical" />

          <Caption title={formatMessage({ id: 'ui.language' })}>
            {language?.toUpperCase()}
          </Caption>
        </Group>

        <Text align="center" className={classes.title} lineClamp={2}>
          {stripTags(summary || description)}
        </Text>
      </Stack>
    </Paper>
  );
}
