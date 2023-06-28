import Banner from './Banner';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import Indicators from './Indicators';

export default function RotatingBanner({ items }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Banner />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PrevButton />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Indicators number="0" />
        <Indicators number="1" />
        <Indicators number="2" />
        <Indicators number="3" />
        <Indicators number="4" />
        <Indicators number="5" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <NextButton />
      </div>
    </div>
  );
}
