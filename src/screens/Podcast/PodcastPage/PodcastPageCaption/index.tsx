import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import { Text, Paper, Group, Divider } from '@mantine/core';

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
  const { cx, classes } = useStyles();
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
    <>
      <Paper className={classes.caption}>
        <Group>
          <Caption title={formatMessage({ id: 'ui.genre' })}>
            {genre.name}
          </Caption>

          <Divider orientation="vertical" />

          <Caption title={formatMessage({ id: 'ui.language' })}>
            {language?.toUpperCase()}
          </Caption>
        </Group>
      </Paper>

      <Paper
        component="button"
        onClick={openDetails}
        className={cx(classes.more, classes.caption)}
      >
        <Text align="center" className={classes.title} lineClamp={2}>
          {stripTags(summary || description)}
        </Text>
      </Paper>
    </>
  );
}
