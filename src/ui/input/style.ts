import styled from 'styled-components';

export const StyledInput = styled.input`
  display: flex;
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
    font-size: 0.875rem;
    font-weight: medium;
  }

  &:focus-visible {
    outline: 2px solid hsl(${p => p.theme.colors.ring});
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 50%;
  }
`;
