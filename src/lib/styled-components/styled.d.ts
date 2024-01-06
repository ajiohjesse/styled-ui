import 'styled-components';
import { ThemeType } from './types';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp<MyTheme>;
  }
}
