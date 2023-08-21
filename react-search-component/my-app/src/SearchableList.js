import { useState } from 'react';
import SearchBar from './SearchBar';
import Filter from './Filter';

export default function SearchableList({ list }) {
  const [filter, setFilter] = useState('');

  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  function filterItems(filterValue) {
    return list.filter((item) =>
      item.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
  const filteredItems = filterItems(filter);

  return (
    <div>
      <SearchBar onFilterChange={handleFilterChange} />
      <Filter filteredItems={filteredItems} />
    </div>
  );
}
