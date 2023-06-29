export default function Indicators({ count, current, onIndicatorClick }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {[...Array(count).keys()].map((index) => (
        <button
          key={index}
          onClick={() => onIndicatorClick(index)}
          style={{
            backgroundColor: current === index ? 'lightblue' : '',
          }}>
          {index}
        </button>
      ))}
    </div>
  );
}
