export type Colors = {
  background: string;
  foreground: string;

  card: string;
  card_foreground: string;

  popover: string;
  popover_foreground: string;

  primary: string;
  primary_foreground: string;

  secondary: string;
  secondary_foreground: string;

  muted: string;
  muted_foreground: string;

  accent: string;
  accent_foreground: string;

  destructive: string;
  destructive_foreground: string;

  border: string;
  input: string;
  ring: string;
};

export type ThemeType = {
  colors: Colors;
  font?: {
    sans: string;
    serif?: string;
    heading?: string;
  };
  radius: {
    lg: string;
    md: string;
    sm: string;
  };
};
