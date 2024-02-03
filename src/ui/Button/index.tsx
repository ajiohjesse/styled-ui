import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';
import { StyledButton } from './styles';

export type ButtonVariant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link';

export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

export interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardedRef) => {
    const {
      variant = 'default',
      size = 'default',
      asChild = false,
      children,
      type = 'button',
      loading = false,
      ...rest
    } = props;

    return asChild ? (
      <StyledButton
        as={Slot}
        $variant={variant}
        $size={size}
        ref={forwardedRef}
        children={children}
        $loading={loading}
      />
    ) : (
      <StyledButton
        type={type}
        $variant={variant}
        $size={size}
        ref={forwardedRef}
        children={children}
        $loading={loading}
        {...rest}
      />
    );
  },
);
Button.displayName = 'Button';

export default Button;
