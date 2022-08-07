import type { SchemeVariable } from './types';

export const colorBg: SchemeVariable = {
  dark: (theme) => theme.colors.dark[7],
  light: (theme) => theme.white,
};

export const colorText: SchemeVariable = {
  dark: (theme) => theme.colors.dark[0],
  light: (theme) => theme.black,
};

export const colorCard: SchemeVariable = {
  dark: (theme) => theme.colors.dark[6],
  light: (theme) => theme.colors.gray[1],
};

export const colorPrimary: SchemeVariable = {
  dark: (theme) => theme.colors[theme.primaryColor][6],
  light: (theme) => theme.colors[theme.primaryColor][6],
};
