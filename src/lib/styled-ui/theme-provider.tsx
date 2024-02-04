import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import {
  ColorSchemeProvider,
  GlobalStyles,
  ThemeType,
  darkTheme,
  defaultTheme,
  useColorScheme,
} from './index';

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <ColorSchemeProvider>
      <ThemeProviderContent>{children}</ThemeProviderContent>
    </ColorSchemeProvider>
  );
};

const ThemeProviderContent: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { colorScheme } = useColorScheme();
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? darkTheme
    : defaultTheme;

  const themes: Record<typeof colorScheme, ThemeType> = {
    dark: darkTheme,
    light: defaultTheme,
    system: systemTheme,
  };

  return (
    <StyledThemeProvider theme={themes[colorScheme]}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};
