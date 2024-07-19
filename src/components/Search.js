import React from "react";

function Search({filterText, setFilterText }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
