import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ items, onDelete}) {
  const itemsDisplayed = items.map((item, index) => {
    return (
        <ListingCard key={index} items={item} onDelete={onDelete} />
    )
  })

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {itemsDisplayed}
      </ul>
    </main>
  );
}

export default ListingsContainer;
