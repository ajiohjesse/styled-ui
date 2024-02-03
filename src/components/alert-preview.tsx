import { Alert, AlertDescription, AlertTitle } from '@/ui/alert';
import { Terminal } from 'lucide-react';
import Section from './section';

const AlertPreview = () => {
  return (
    <Section title='Alert'>
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
          An error occured while trying to add components to your app using the
          cli.
        </AlertDescription>
      </Alert>
    </Section>
  );
};

export default AlertPreview;
