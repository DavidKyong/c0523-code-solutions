import { useState } from 'react';
import RenderingList from './RenderingList';

export default function Accordion({ topics }) {
  const [activeIndex, setActiveIndex] = useState(false);

  function toggleAccordion(index) {
    setActiveIndex((prevIndex) => (prevIndex === index ? false : index));
  }

  return (
    <RenderingList
      topics={topics}
      activeIndex={activeIndex}
      toggleAccordion={toggleAccordion}
    />
  );
}
