import Input from '@/ui/input';
import Label from '@/ui/label';
import Section from './section';

const InputsPreview = () => {
  return (
    <Section title='Inputs and Form Controls'>
      <Label htmlFor='name'>Name</Label>
      <Input id='name' name='name' placeholder='Enter name...' disabled />
    </Section>
  );
};

export default InputsPreview;
