import React from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer( {items, onDelete} ) {
  const displayedItems = items.map((item) => (
    <ListingCard key={item.id} items={item} onDelete={onDelete}/>
  ))
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {displayedItems}
      </ul>
    </main>
  );
}

export default ListingsContainer;
