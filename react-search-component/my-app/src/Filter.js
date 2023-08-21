export default function ItemList({ filteredItems }) {
  return (
    <div>
      {filteredItems.length > 0 ? (
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No items match the filter</p>
      )}
    </div>
  );
}
