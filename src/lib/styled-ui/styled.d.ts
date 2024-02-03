import 'styled-components';
import { ThemeType } from './types';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

/**
 * css prop is currently not configured
 */

// declare module 'react' {
//   interface Attributes {
//     css?: CSSProp<MyTheme>;
//   }
// }
