import React, { useState } from 'react';

export default function SearchableList({ text, list }) {
  const [filter, setFilter] = useState('');
  const [items, setItems] = useState(list);

  function filterItems(filterValue) {
    return items.filter((item) =>
      item.toLowerCase().includes(filterValue.toLowerCase())
    );
  }

  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  const filteredItems = filterItems(filter);

  return (
    <div>
      <div className="search-bar">
        <i className="fa-solid fa-magnifying-glass" />
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Search"
        />
      </div>
      {filteredItems.length > 0 ? (
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No items match the filter.</p>
      )}
    </div>
  );
}
