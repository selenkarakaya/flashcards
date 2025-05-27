import React from "react";
import { useSelector } from "react-redux";
import Card from "../cards/Card";

export default function FavoriteQuiz() {
  const favoriteCardIds = useSelector((state) => state.favorites.cardIds);
  console.log(favoriteCardIds);
  if (favoriteCardIds.length === 0) {
    return <p>No favorite cards yet. ❤️</p>;
  }

  return (
    <section>
      <h1>Favorite Quiz</h1>
      <ul className="cards-list">
        {favoriteCardIds.map((id) => (
          <Card key={id} id={id} />
        ))}
      </ul>
    </section>
  );
}
