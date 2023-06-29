import Banner from './Banner';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import Indicators from './Indicators';
import { useState } from 'react';

export default function RotatingBanner({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNextClick() {
    setCurrentIndex(currentIndex + 1);
  }

  function handlePrevClick() {
    setCurrentIndex(currentIndex - 1);
  }

  function handleIndicatorsClick(index) {
    setCurrentIndex(index);
  }

  return (
    <div>
      <Banner item={items[currentIndex]} />
      <PrevButton onPrevClick={handlePrevClick} />
      <Indicators
        count={items.length}
        current={currentIndex}
        onIndicatorClick={handleIndicatorsClick}
      />
      <NextButton onNextClick={handleNextClick} />
    </div>
  );
}
