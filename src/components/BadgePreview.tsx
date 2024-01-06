import Badge from '@/ui/Badge';
import Section from './Section';

const BadgePreview = () => {
  return (
    <Section title='Badge'>
      <div
        style={{
          display: 'flex',
          gap: '8px',
        }}
      >
        <Badge>Badge</Badge>
        <Badge variant='secondary'>Badge</Badge>
        <Badge variant='destructive'>Badge</Badge>
        <Badge variant='outline'>Badge</Badge>
      </div>
    </Section>
  );
};

export default BadgePreview;
