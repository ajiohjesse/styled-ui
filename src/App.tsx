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
        <Button size="sm">small</Button>
        <Button size="lg">Large</Button>
        <Button disabled>Disabled</Button>
        <Button size="sm">Normal</Button>
        <Button variant="outline">outline normal</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="link">Link to</Button>
        <Button variant="destructive">Cancel</Button>
      </div>
    </>
  );
}

export default App;
