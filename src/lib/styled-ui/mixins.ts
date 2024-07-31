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

export const shadowCss = css`
  box-shadow: -2px 10px 12px -1px rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: -2px 10px 12px -1px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: -2px 10px 12px -1px rgba(0, 0, 0, 0.19);
`;
