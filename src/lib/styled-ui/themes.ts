import { darkModeColors, defaultColors } from './colors';
import { ThemeType } from './types';

const sharedThemeValues: Omit<ThemeType, 'colors'> = {
  font: {
    sans: 'Inter, sans-serif',
  },
  radius: {
    lg: '0.5rem',
    md: 'calc(0.5rem - 2px)',
    sm: 'calc(0.5rem - 4px)',
  },
};

export const defaultTheme: ThemeType = {
  colors: defaultColors,
  ...sharedThemeValues,
};

export const darkTheme: ThemeType = {
  colors: darkModeColors,
  ...sharedThemeValues,
};
