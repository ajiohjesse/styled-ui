import { ThemeProvider } from 'styled-components';
import { GlobalStyles, defaultTheme } from './index';

export const StyledThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
