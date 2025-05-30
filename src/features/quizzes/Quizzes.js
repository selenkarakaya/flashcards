import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";

export default function Quizzes() {
  const quizzes = useSelector((state) => state.quizzes.quizzes);

  return (
    <section className="center">
      <Link to={ROUTES.randomQuizRoute()} className="button">
        Random Quiz
      </Link>
      <Link to={ROUTES.favoriteQuizRoute()} className="button">
        Start Favorite Quiz
      </Link>
      <h1>Quizzes</h1>
      <ul className="quizzes-list">
        {Object.values(quizzes).map((quiz) => (
          <li className="quiz" key={quiz.id}>
            <Link to={ROUTES.quizRoute(quiz.id)}>{quiz.name}</Link>
          </li>
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button">
        Create New Quiz
      </Link>
    </section>
  );
}
