import { createContext, useContext, useState } from 'react';

const THEME_STORAGE_KEY = 'styled-ui-theme';

type ColorScheme = 'dark' | 'light' | 'system';

type ColorSchemeProviderProps = {
  children: React.ReactNode;
  defaultColorScheme?: ColorScheme;
  storageKey?: string;
};

type ColorSchemeProviderState = {
  colorScheme: ColorScheme;
  setColorScheme: (colorScheme: ColorScheme) => void;
};

const initialState: ColorSchemeProviderState = {
  colorScheme: 'system',
  setColorScheme: () => null,
};

const ColorSchemeProviderContext =
  createContext<ColorSchemeProviderState>(initialState);

export function ColorSchemeProvider({
  children,
  defaultColorScheme = 'system',
  storageKey = THEME_STORAGE_KEY,
  ...props
}: ColorSchemeProviderProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    () =>
      (localStorage.getItem(storageKey) as ColorScheme) || defaultColorScheme,
  );

  const value: ColorSchemeProviderState = {
    colorScheme: colorScheme,
    setColorScheme: (scheme: ColorScheme) => {
      localStorage.setItem(storageKey, scheme);
      setColorScheme(scheme);
    },
  };

  return (
    <ColorSchemeProviderContext.Provider {...props} value={value}>
      {children}
    </ColorSchemeProviderContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useColorScheme = () => {
  const context = useContext(ColorSchemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
