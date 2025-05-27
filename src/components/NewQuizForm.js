import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ROUTES from "../app/routes";
import { addQuizIdToTopic } from "../features/topics/topicsSlice";
import { addCard } from "../features/cards/cardsSlice";
import { addQuiz } from "../features/quizzes/quizzesSlice";
// import selectors

export default function NewQuizForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const topics = useSelector((state) => state.topics.topics);

  const [name, setName] = useState("");
  const [topicId, setTopicId] = useState("");
  const [cards, setCards] = useState([{ front: "", back: "" }]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !topicId || cards.length === 0) {
      alert("Please fill all fields and add at least one card.");
      return;
    }

    // create the new cards here and add each card's id to cardIds
    const cardIds = cards.map((card) => {
      const id = uuidv4();
      dispatch(addCard({ id, front: card.front, back: card.back }));
      return id;
    });
    // create the new quiz here

    const quizId = uuidv4();
    dispatch(addQuiz({ id: quizId, name, topicId, cardIds }));
    // dispatch add quiz action
    dispatch(addQuizIdToTopic({ topicId, quizId }));
    navigate(ROUTES.topicsRoute());
  };

  const addCardInputs = (e) => {
    e.preventDefault();
    setCards([...cards, { front: "", back: "" }]);
  };

  const removeCard = (e, index) => {
    e.preventDefault();
    setCards(cards.filter((_, i) => i !== index));
  };

  const updateCardState = (index, side, value) => {
    const newCards = [...cards];
    newCards[index][side] = value;
    setCards(newCards);
  };

  return (
    <section>
      <h1>Create a new quiz</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="quiz-name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Quiz Title"
        />
        <select
          id="quiz-topic"
          onChange={(e) => setTopicId(e.currentTarget.value)}
          placeholder="Topic"
        >
          <option value="">Topic</option>
          {Object.values(topics).map((topic) => (
            <option key={topic.id} value={topic.id}>
              {topic.name}
            </option>
          ))}
        </select>
        {cards.map((card, index) => (
          <div key={index} className="card-front-back">
            <input
              id={`card-front-${index}`}
              value={cards[index].front}
              onChange={(e) =>
                updateCardState(index, "front", e.currentTarget.value)
              }
              placeholder="Front"
            />

            <input
              id={`card-back-${index}`}
              value={cards[index].back}
              onChange={(e) =>
                updateCardState(index, "back", e.currentTarget.value)
              }
              placeholder="Back"
            />

            <button
              onClick={(e) => removeCard(e, index)}
              className="remove-card-button"
            >
              Remove Card
            </button>
          </div>
        ))}
        <div className="actions-container">
          <button onClick={addCardInputs}>Add a Card</button>
          <button type="submit">Create Quiz</button>
        </div>
      </form>
    </section>
  );
}
