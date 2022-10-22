import { isEmpty } from 'lodash';
import { useIntl } from 'react-intl';
import { Loader, Center } from '@mantine/core';
import { TbEyeOff, TbAlertCircle } from 'react-icons/tb';

import type { ReactNode } from 'react';
import type { CenterProps } from '@mantine/core';

import { Placeholder } from 'src/components/UI';

import { useStyles } from './styles';

type Status = 'data' | 'error' | 'loading' | 'nothing';

interface StatusProps extends CenterProps {
  views?: Partial<Omit<Record<Status, ReactNode>, 'data'>>;
  selectors?: Partial<Omit<Record<Status, any>, 'nothing'>>;
}

export function Status({
  views,
  children,
  selectors,
  className,
  ...props
}: StatusProps) {
  const isData = !isEmpty(selectors?.data);
  const isError = !isEmpty(selectors?.error);
  const isLoading = Boolean(selectors?.loading);
  const isNothing = !isLoading && !isError && !isData;

  const { cx, classes } = useStyles();
  const { formatMessage } = useIntl();

  return (
    <>
      {isData && children}

      <Center {...props} className={cx(classes.status, className)}>
        {isLoading && (views?.loading || <Loader />)}

        {isError &&
          (views?.error || (
            <Placeholder
              icon={TbAlertCircle}
              title={formatMessage({ id: 'message.somethingWentWrong' })}
            />
          ))}

        {isNothing &&
          (views?.nothing || (
            <Placeholder
              icon={TbEyeOff}
              title={formatMessage({ id: 'message.nothingFound' })}
            />
          ))}
      </Center>
    </>
  );
}
