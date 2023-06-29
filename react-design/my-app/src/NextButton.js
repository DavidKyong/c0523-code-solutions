export default function NextButton({ onNextClick }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button className="next" onClick={onNextClick}>
        Next
      </button>
    </div>
  );
}
