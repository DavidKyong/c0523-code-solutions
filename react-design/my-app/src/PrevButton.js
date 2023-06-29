export default function PrevButton({ onPrevClick }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button className="previous" onClick={onPrevClick}>
        Prev
      </button>
    </div>
  );
}
