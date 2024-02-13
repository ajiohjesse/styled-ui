import Button from '@/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/ui/popover';
import Section from './section';

const PopoverPreview = () => {
  return (
    <Section title='Popover'>
      <Popover>
        <PopoverTrigger asChild>
          <Button>Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    </Section>
  );
};

export default PopoverPreview;
