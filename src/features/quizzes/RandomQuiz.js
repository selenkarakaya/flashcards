import React from "react";
import { useSelector } from "react-redux";
import Card from "../cards/Card";

export default function RandomQuiz() {
  const quizzes = useSelector((state) => state.quizzes.quizzes);

  // all card ids
  const allCardIds = Object.values(quizzes).flatMap((quiz) => quiz.cardIds);
  console.log(allCardIds);

  const shuffle = (array) => {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };
  const shuffled = shuffle(allCardIds);
  const randomCount = Math.floor(Math.random() * shuffled.length) + 1; // min 1 card
  const selectedCardIds = shuffled.slice(0, randomCount);

  return (
    <section>
      <h1>Random Quiz</h1>
      <ul className="cards-list">
        {selectedCardIds.map((id) => (
          <Card key={id} id={id} />
        ))}
      </ul>
    </section>
  );
}
