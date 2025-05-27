import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../../features/favorites/favoritesSlice";

export default function Card({ id }) {
  const card = useSelector((state) => state.cards.cards[id]);
  const [flipped, setFlipped] = useState(false);
  const favorites = useSelector((state) => state.favorites.cardIds);
  const dispatch = useDispatch();
  if (!card) {
    return null;
  }

  const isFavorite = favorites.includes(id);

  return (
    <li className="card-container">
      <button className="card" onClick={() => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
      <button
        className="favorite-button"
        onClick={() => dispatch(toggleFavorite(id))}
        style={{ color: isFavorite ? "red" : "gray", marginLeft: "8px" }}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </li>
  );
}
