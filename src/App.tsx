import AccordionPreview from './components/accordion-preview';
import AlertDialogPreview from './components/alert-dialog-preview';
import AlertPreview from './components/alert-preview';
import AspectRatioPreview from './components/aspect-ratio-preview';
import AvatarPreview from './components/avatar-preview';
import BadgePreview from './components/badge-preview';
import BreadcrumbPreview from './components/breadcrumb-preview';
import ButtonPreview from './components/button-preview';
import DialogPreview from './components/dialog-preview';
import PopoverPreview from './components/popover-preview';

function App() {
  return (
    <div style={{ paddingBlock: '40px' }}>
      <ButtonPreview />
      <AlertPreview />
      <AccordionPreview />
      <DialogPreview />
      <AlertDialogPreview />
      <AspectRatioPreview />
      <AvatarPreview />
      <BadgePreview />
      <PopoverPreview />
      <BreadcrumbPreview />
    </div>
  );
}

export default App;
