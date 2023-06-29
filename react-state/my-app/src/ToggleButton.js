import { useState } from 'react';

export default function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('value of useState', isClicked);

  function handleClick() {
    console.log('value before calling setter', isClicked);
    setIsClicked(!isClicked);
    console.log('value after calling setter', isClicked);
  }

  return (
    <button
      style={{ backgroundColor: isClicked ? color : 'white' }}
      onClick={handleClick}>
      {text}
    </button>
  );
}
