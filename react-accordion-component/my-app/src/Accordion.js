import { useState } from 'react';
import RenderingList from './RenderingList';

export default function Accordion({ topics }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  function onToggle(index) {
    setActiveIndex(activeIndex === index ? false : index);
  }

  return (
    <RenderingList
      topics={topics}
      activeIndex={activeIndex}
      onToggle={onToggle}
    />
  );
}
