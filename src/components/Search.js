import React from "react";

function Search( {searchTerm, onSearchTerm} ) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={(e) => onSearchTerm(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
