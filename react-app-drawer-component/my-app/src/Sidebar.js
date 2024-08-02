import { FaPlay } from 'react-icons/fa';
import './Sidebar.css'; // Import your CSS styles here
import { useState } from 'react';

export default function SideBar({ items }) {
  const [showSide, setShowSide] = useState(false);

  function handleIconClick() {
    setShowSide(!showSide);
  }

  function handleCloseSide() {
    setShowSide(!showSide);
  }

  return (
    <div
      className={`overlay ${!showSide ? 'active' : ''}`}
      onClick={handleCloseSide}>
      <FaPlay
        className={`icon ${showSide ? 'hidden' : ''}`}
        onClick={handleIconClick}
      />
      <div
        className={`sidebar ${showSide ? 'open' : ''}`}
        onClick={handleCloseSide}>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
