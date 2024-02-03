import AccordionPreview from './components/accordion-preview';
import AlertDialogPreview from './components/alert-dialog-preview';
import AlertPreview from './components/alert-preview';
import AspectRatioPreview from './components/aspect-ratio-preview';
import AvatarPreview from './components/avatar-preview';
import BadgePreview from './components/badge-preview';
import ButtonPreview from './components/button-preview';

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
