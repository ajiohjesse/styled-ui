import { AspectRatio } from '@/ui/AspectRatio';
import Section from './Section';

const AspectRatioPreview = () => {
  return (
    <Section title='Apect Ratio'>
      <div
        style={{
          width: '100%',
          maxWidth: '600px',
          marginInline: 'auto',
        }}
      >
        <AspectRatio ratio={16 / 9}>
          <img
            src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80'
            alt='Photo by Drew Beamer'
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'blue',
              objectFit: 'cover',
            }}
          />
        </AspectRatio>
      </div>
    </Section>
  );
};

export default AspectRatioPreview;
