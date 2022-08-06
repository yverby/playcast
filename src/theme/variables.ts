import type { SchemeVariable } from './types';

export const colorBg: SchemeVariable = {
  dark: (theme) => theme.colors.dark[7],
  light: (theme) => theme.white,
};

export const colorPrimary: SchemeVariable = {
  dark: (theme) => theme.colors[theme.primaryColor][6],
  light: (theme) => theme.colors[theme.primaryColor][5],
};
