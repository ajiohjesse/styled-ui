import { defaultColors } from './colors';
import { ThemeType } from './types';

export const defaultTheme: ThemeType = {
  colors: defaultColors,
  font: {
    sans: 'Inter, sans-serif',
  },
  radius: {
    lg: '0.5rem',
    md: 'calc(0.5rem - 2px)',
    sm: 'calc(0.5rem - 4px)',
  },
};
