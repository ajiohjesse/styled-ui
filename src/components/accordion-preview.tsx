import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/ui/accordion';
import Section from './section';

const AccordionPreview = () => {
  return (
    <Section title='Accordion'>
      <div style={{ display: 'grid', width: '100%' }}>
        <Accordion type='single' collapsible>
          <AccordionItem value='item-1'>
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>
              Do you want to see more options?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Section>
  );
};

export default AccordionPreview;
