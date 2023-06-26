import './App.css';
import UpDownButton from './UpDownButton';
import { useState } from 'react';

function App() {
  const [isClicked, setIsClicked] = useState(0);

  function handleDownClick() {
    setIsClicked(isClicked - 1);
  }

  function handleUpClick() {
    setIsClicked(isClicked + 1);
  }

  return (
    <div className="App">
      <UpDownButton text="Down" onUpDownClick={handleDownClick} />
      <p>{isClicked}</p>
      <UpDownButton text="Up" onUpDownClick={handleUpClick} />
    </div>
  );
}

export default App;
