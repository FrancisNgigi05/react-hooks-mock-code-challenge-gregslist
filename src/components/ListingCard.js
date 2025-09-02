import React, { useState } from "react";
import { API_URL } from "./api";

function ListingCard( {items, onDelete} ) {
  const {id, description, image, location} = items;
  const [isFavorite, setIsFavorite] = useState(false);

  function handleDeleteClick() {
    fetch(`${API_URL}/${id}`,{
      method: "DELETE"
    })
      .then(() => onDelete(id))
  }

  function handleFavoriteChange() {
    setIsFavorite(!isFavorite);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={handleFavoriteChange} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavoriteChange} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
