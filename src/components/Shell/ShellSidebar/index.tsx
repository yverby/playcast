import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { Title } from '@mantine/core';
import { TbVinyl } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from '@mantine/hooks';

import { uiActions } from 'src/store/ui/actions';
import { Status, Section, Placeholder } from 'src/components/UI';

import { useStyles } from './styles';

export function ShellSidebar() {
  const dispatch = useDispatch();
  const { formatMessage } = useIntl();
  const { theme, classes } = useStyles();

  const isMaxLg = useMediaQuery(`(max-width: ${theme.breakpoints.lg}px)`);

  useEffect(() => {
    dispatch(uiActions.sidebar.toggle(!isMaxLg));
  }, [isMaxLg]);

  const closeSidebar = () => {
    isMaxLg && dispatch(uiActions.sidebar.toggle(false));
  };

  const nothing = (
    <Placeholder
      icon={TbVinyl}
      title={formatMessage({ id: 'ui.comingSoon' })}
    />
  );

  return (
    <Section onClick={closeSidebar}>
      <Section.Header className={classes.header}>
        <Title order={2}>{formatMessage({ id: 'ui.playingNow' })}</Title>
      </Section.Header>

      <Section.Content>
        <Status views={{ nothing }}>{[]}</Status>
      </Section.Content>
    </Section>
  );
}
