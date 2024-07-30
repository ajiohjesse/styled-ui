import { forwardRef } from 'react';
import { StyledInput } from './style';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, ...props }, ref) => {
    return <StyledInput type={type} ref={ref} {...props} />;
  },
);
Input.displayName = 'Input';

export default Input;
