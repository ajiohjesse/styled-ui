import { forwardRef } from 'react';
import styled from 'styled-components';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    return <StyledTextArea ref={ref} {...props} />;
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };

const StyledTextArea = styled.textarea`
  display: flex;
  min-height: 80px;
  width: 100%;
  border-radius: ${p => p.theme.radius.md};
  border: 1px solid hsl(${p => p.theme.colors.input});
  background-color: hsl(${p => p.theme.colors.background});
  padding: 8px 12px;
  font-size: 0.875rem;

  &::placeholder {
    color: hsl(${p => p.theme.colors.muted_foreground});
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 50%;
  }

  &:focus-visible {
    outline: 2px solid hsl(${p => p.theme.colors.ring});
    outline-offset: 2px;
  }
`;
