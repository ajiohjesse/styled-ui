import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar';
import Section from './section';

const AvatarPreview = () => {
  return (
    <Section title='Avatar'>
      <Avatar style={{ width: '100px', height: '100px' }}>
        <AvatarImage src='https://picsum.photos/200' />
        <AvatarFallback>GR</AvatarFallback>
      </Avatar>

      <Avatar style={{ width: '80px', height: '80px' }}>
        <AvatarImage src='https://picsum.photos/200' />
        <AvatarFallback>GR</AvatarFallback>
      </Avatar>

      <Avatar>
        <AvatarImage src='https://picsum.photos/200' />
        <AvatarFallback>GR</AvatarFallback>
      </Avatar>

      <Avatar>
        <AvatarImage src='https://github.com/shadcn.png' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </Section>
  );
};

export default AvatarPreview;
