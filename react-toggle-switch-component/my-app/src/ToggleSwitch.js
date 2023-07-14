import { useState } from 'react';

export default function ToggleSwitch({ text }) {
  const [click, setClick] = useState(false);
  function handleClick() {
    setClick(!click);
  }
  return (
    <div className="container">
      <label className="switch">
        <input type="checkbox" onClick={handleClick}></input>
        <span className="slider"></span>
      </label>
      <div className="on">{click ? 'On' : 'Off'}</div>
    </div>
  );
}
