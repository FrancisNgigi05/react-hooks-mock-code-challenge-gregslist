import { useState } from "react";
import React from "react";
import ITEMS_URL from "./url";

function ListingCard({ items, onDelete }) {
  const {id, description, image, location} = items
  const [isFavourite, setIsFavourite] = useState(false);

  const handleClickFavourite = () => {
    setIsFavourite(isFavourite => (!isFavourite));
  }

  const handleDelete =  () => {
    fetch(`${ITEMS_URL}/${id}`, {
      method: "DELETE",
    })
    .then(() => onDelete(id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        <button className={`emoji-button favorite ${isFavourite ? 'active' : ''}`} onClick={handleClickFavourite}>
          {isFavourite ? '★' : '☆'}
        </button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => {handleDelete(id)}}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
