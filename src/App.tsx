import AccordionPreview from './components/AccordionPreview';
import AlertDialogPreview from './components/AlertDialogPreview';
import AlertPreview from './components/AlertPreview';
import AspectRatioPreview from './components/AspectRatioPreview';
import AvatarPreview from './components/AvatarPreview';
import BadgePreview from './components/BadgePreview';
import ButtonPreview from './components/ButtonPreview';

function App() {
  return (
    <div style={{ paddingBlock: '40px' }}>
      <ButtonPreview />
      <AlertPreview />
      <AccordionPreview />
      <AlertDialogPreview />
      <AspectRatioPreview />
      <AvatarPreview />
      <BadgePreview />
    </div>
  );
}

export default App;
