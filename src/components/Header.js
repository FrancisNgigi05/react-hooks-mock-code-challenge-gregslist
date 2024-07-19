import React from "react";
import Search from "./Search";

function Header({ items, filterText, setFilterText }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search items={items} filterText={filterText} setFilterText={setFilterText} />
    </header>
  );
}

export default Header;
