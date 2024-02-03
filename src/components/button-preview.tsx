import Button from '@/ui/button';
import Section from './section';

const ButtonPreview = () => {
  return (
    <Section title='Button'>
      <Button asChild>
        <div>As child</div>
      </Button>
      <Button size='sm'>small</Button>
      <Button size='lg'>Large</Button>
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
      <Button size='sm'>Normal</Button>
      <Button variant='outline'>outline normal</Button>
      <Button variant='ghost'>ghost</Button>
      <Button variant='secondary'>secondary</Button>
      <Button variant='link'>Link to</Button>
      <Button variant='destructive'>Cancel</Button>
    </Section>
  );
};

export default ButtonPreview;
