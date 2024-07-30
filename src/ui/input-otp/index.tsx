import { OTPInput, OTPInputContext } from 'input-otp';
import { Dot } from 'lucide-react';
import * as React from 'react';
import {
  StyledInputCaret,
  StyledInputOtp,
  StyledOtpGroup,
  StyledOtpSlot,
} from './style';

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <StyledInputOtp>
    <OTPInput
      spellCheck={false}
      ref={ref}
      containerClassName={`styled-container ${
        containerClassName ? containerClassName : ''
      }`}
      className={`styled-otp ${className ? className : ''}`}
      {...props}
    />
  </StyledInputOtp>
));
InputOTP.displayName = 'InputOTP';

const InputOTPGroup = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>((props, ref) => <StyledOtpGroup ref={ref} {...props} />);
InputOTPGroup.displayName = 'InputOTPGroup';

const InputOTPSlot = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <StyledOtpSlot ref={ref} $active={isActive} {...props}>
      {char}
      {hasFakeCaret && (
        <StyledInputCaret>
          <div />
        </StyledInputCaret>
      )}
    </StyledOtpSlot>
  );
});
InputOTPSlot.displayName = 'InputOTPSlot';

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ ...props }, ref) => (
  <div ref={ref} role='separator' {...props}>
    <Dot />
  </div>
));
InputOTPSeparator.displayName = 'InputOTPSeparator';

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };
