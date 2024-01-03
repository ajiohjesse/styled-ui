import { Terminal } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/Accordion';
import { Alert, AlertDescription, AlertTitle } from './ui/Alert';
import Button from './ui/Button';

function App() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          padding: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <Button asChild>
          <div>As child</div>
        </Button>
        <Button size='sm'>small</Button>
        <Button size='lg'>Large</Button>
        <Button disabled>Disabled</Button>
        <Button size='sm'>Normal</Button>
        <Button variant='outline'>outline normal</Button>
        <Button variant='ghost'>ghost</Button>
        <Button variant='secondary'>secondary</Button>
        <Button variant='link'>Link to</Button>
        <Button variant='destructive'>Cancel</Button>
      </div>

      <div
        style={{
          maxWidth: '400px',
          marginInline: 'auto',
          paddingBlock: '2rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gap: '1rem',
          }}
        >
          <Alert>
            <Terminal style={{ width: '1rem', height: '1rem' }} />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the cli.
            </AlertDescription>
          </Alert>

          <Alert variant='destructive'>
            <Terminal style={{ width: '1rem', height: '1rem' }} />
            <AlertTitle>Error!</AlertTitle>
            <AlertDescription>
              An error occured while trying to add components to your app using
              the cli.
            </AlertDescription>
          </Alert>
        </div>

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

      <div></div>
    </>
  );
}

export default App;
