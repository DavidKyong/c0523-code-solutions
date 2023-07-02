import RotatingBanner from './RotatingBanner';
import './NextButton.css';

const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

function App() {
  return (
    <div>
      <RotatingBanner items={items} />
    </div>
  );
}

export default App;
