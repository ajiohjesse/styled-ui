import * as React from 'react';
import {
  StyledAlert,
  StyledAlertDescription,
  StyledAlertTitle,
} from './styles';

export type AlertVariant = 'default' | 'destructive';

interface AlertProps {
  variant?: AlertVariant;
}

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & AlertProps
>(({ variant = 'default', ...props }, ref) => (
  <StyledAlert $variant={variant} ref={ref} role='alert' {...props} />
));
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => <StyledAlertTitle ref={ref} {...props} />);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>((props, ref) => <StyledAlertDescription ref={ref} {...props} />);
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertDescription, AlertTitle };
