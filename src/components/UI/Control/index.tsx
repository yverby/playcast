import { Box, Button } from '@mantine/core';

import type { IconType } from 'react-icons';
import type { DefaultProps } from '@mantine/core';

import { useStyles } from './styles';

interface ControlProps extends DefaultProps {
  icon: IconType;
  title?: string;
  active: boolean;
  onClick: () => void;
}

export function Control({
  title,
  active,
  styles,
  onClick,
  unstyled,
  className,
  classNames,
  icon: Icon,
  ...props
}: ControlProps) {
  const { cx, classes } = useStyles(undefined, {
    name: 'Control',
    styles,
    unstyled,
    classNames,
  });

  const cn = (act: boolean) => ({
    inner: classes.inner,
    label: classes.label,
    root: cx(classes.root, className, {
      [classes.inactive]: !act,
    }),
  });

  return (
    <Button
      {...props}
      key={title}
      onClick={onClick}
      aria-label={title}
      classNames={cn(active)}
    >
      <Icon size={17} strokeWidth={2.25} />
      {title && <Box component="span">{title}</Box>}
    </Button>
  );
}
