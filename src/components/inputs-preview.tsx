import Checkbox from '@/ui/checkbox';
import Input from '@/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/ui/input-otp';
import Label from '@/ui/label';
import { Textarea } from '@/ui/textarea';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import Section from './section';

const InputsPreview = () => {
  return (
    <Section title='Inputs and Form Controls'>
      <fieldset>
        <Label htmlFor='name'>Name</Label>
        <Input id='name' name='name' placeholder='Enter name...' />
      </fieldset>

      <fieldset>
        <Label htmlFor='otp'>OTP</Label>
        <InputOTP
          id='otp'
          name='otp'
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </fieldset>

      <fieldset>
        <Label htmlFor='desc'>Description</Label>
        <Textarea id='desc' name='desc'>
          Enter description
        </Textarea>
      </fieldset>

      <fieldset style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
        <Checkbox id='check' name='check' />
        <Label htmlFor='check'>Description</Label>
      </fieldset>
    </Section>
  );
};

export default InputsPreview;
