export default function SearchBar({ filter, onFilterChange }) {
  return (
    <div>
      <div className="search-bar">
        <i className="fa-solid fa-magnifying-glass" />
        <input
          type="text"
          value={filter}
          onChange={onFilterChange}
          placeholder="Search"
        />
      </div>
    </div>
  );
}
