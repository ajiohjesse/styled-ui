import { forwardRef } from 'react';
import styled from 'styled-components';

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = forwardRef<HTMLLabelElement, Props>((props, ref) => (
  <StyledLabel ref={ref} {...props} />
));
Label.displayName = 'Label';

export default Label;

const StyledLabel = styled.label`
  font-size: 0.875rem;
  line-height: 0;
  font-weight: 500;

  & ~ input:disabled {
    opacity: 70%;
    cursor: not-allowed;
  }
`;
