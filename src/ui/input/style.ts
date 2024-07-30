import { disabledCss, focusCss } from '@/lib/styled-ui';
import styled from 'styled-components';

export const StyledInput = styled.input`
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
  border-radius: ${p => p.theme.radius.md};
  border: 1px solid hsl(${p => p.theme.colors.input});
  background-color: hsl(${p => p.theme.colors.background});
  padding-inline: 12px;
  padding-block: 8px;

  &::placeholder {
    color: hsl(${p => p.theme.colors.muted_foreground});
  }

  &[type='file'] {
    border: none;
    background-color: transparent;
    font-size: 0.875rem;
    font-weight: 500;
    appearance: none;
  }

  ${focusCss}
  ${disabledCss}
`;
