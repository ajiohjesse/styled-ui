import { css } from 'styled-components';

export const focusCss = css`
  &:focus-visible {
    outline: 2px solid hsl(${p => p.theme.colors.ring});
    outline-offset: 2px;
  }
`;

export const disabledCss = css`
  &:disabled {
    cursor: not-allowed;
    opacity: 50%;
    pointer-events: none;
  }
`;
