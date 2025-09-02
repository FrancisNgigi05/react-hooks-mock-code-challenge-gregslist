import React from "react";
import Search from "./Search";
import Form from "./Form";

function Header( {searchTerm, onSearchTern, onAddItem} ) {
  return (
    <>
      <header>
        <h1>
          <span className="logo" role="img">
            ☮
          </span>
          gregslist
        </h1>
        <Search searchTerm={searchTerm} onSearchTerm={onSearchTern}/>
      </header>
      <Form onAddItem={onAddItem}/>
    </>
  );
}

export default Header;
