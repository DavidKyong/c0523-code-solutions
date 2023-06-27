import { useState } from 'react';
import './HotButton.css';

export default function HotButton() {
  const [count, setCount] = useState(0);

  function onHotButton() {
    setCount(count + 1);
  }

  let color = 'darkblue';

  if (count < 3) {
    color = 'darkblue';
  } else if (count < 6) {
    color = 'purple';
  } else if (count < 9) {
    color = 'red';
  } else if (count < 12) {
    color = 'orange';
  } else if (count < 15) {
    color = 'yellow';
  } else if (count < 18) {
    color = 'white';
  }

  return (
    <div>
      <button onClick={onHotButton} style={{ backgroundColor: color }}>
        Hot Button
      </button>
      {count} Clicks
    </div>
  );
}
