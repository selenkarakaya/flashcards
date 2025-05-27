# 📚 Flashcards App

A Redux-powered flashcard quiz app where users can create topics, quizzes, and flip flashcards.  
Supports **random quiz generation**, **favorite cards**, and **interactive card flipping**.

---

## 🚀 Features

- 🧠 Create topics (e.g., Math, Biology)
- 📝 Create quizzes under topics with custom flashcards
- 🔄 Flip cards to reveal answers
- 🎲 Generate random quizzes with a mix of cards from all topics
- ❤️ Favorite any card and generate a quiz using only your favorite cards
- 🔎 View quizzes per topic or view all quizzes at once
- 🧩 Redux Toolkit for clean, scalable state management

### 🆕 Additional Features

#### 🎲 Random Quiz Mode

- A new route (`/random-quiz`) renders a randomized set of cards across all topics and quizzes.
- Questions and order are shuffled each time.
- Number of cards shown is also random for added challenge.

---

#### ❤️ Favorite Cards

- Each card has a heart icon.
- Clicking toggles its "favorite" status.
- A new route (`/favorite-quiz`) renders a quiz **only using favorited cards**.

---
#### ✨ UI Enhancements

- A heart button (❤️ / 🤍) is visible on every card.
- A button to generate a quiz from favorite cards is available on the **Quizzes** page.
- All new components are seamlessly integrated with the Redux store.

---

## 🗂️ Project Structure

```bash
src/
├── app/
│   ├── App.js
│   └── store.js
├── components/
│   ├── NewTopicForm.js
│   ├── NewQuizForm.js
├── features/
│   ├── cards/
│   │   ├── Card.js
│   │   └── cardsSlice.js
│   ├── favorites/           # ✅ Custom Feature
│   │   └── favoritesSlice.js
│   │   └── FavoriteQuiz.js      # ✅ Custom Component
│   ├── quizzes/
│   │   ├── Quiz.js
│   │   ├── Quizzes.js
│   │   └── quizzesSlice.js
│   │   └── RandomQuiz.js        # ✅ Custom Component
│   └── topics/
│       ├── Topic.js
│       ├── Topics.js
│       └── topicsSlice.js

```
---

## 🧩 Redux State Design

```json
{
  "topics": {
    "topics": {
      "math": {
        "id": "math",
        "name": "Mathematics",
        "icon": "📐",
        "quizIds": ["quiz1"]
      }
    }
  },
  "quizzes": {
    "quizzes": {
      "quiz1": {
        "id": "quiz1",
        "topicId": "math",
        "name": "Algebra Basics",
        "cardIds": ["card1", "card2"]
      }
    }
  },
  "cards": {
    "cards": {
      "card1": {
        "id": "card1",
        "front": "2 + 2",
        "back": "4"
      }
    }
  },
  "favorites": {
    "cardIds": ["card1"]
  }
}
```

## 🛠️ Setup & Installation

```bash
npm install
npm start
```
---

### 🧪 Technologies Used

- **React** ⚛️  
- **Redux Toolkit** 🧰  
- **React Redux** 🔄  
- **React Router** 🛤️  
- **UUID** 🔑  

---

### ✅ Requirements Fulfilled

- Topic, quiz, and card slices were created  
- Dynamic routing was implemented  
- Forms support adding and removing content  
- Relationships between `cardIds`, `quizIds`, and `topicId` were established  
- Flashcard flip functionality was added  
- Extra Feature: **Random Quiz** ✅  
- Extra Feature: **Favorite Cards & Favorite Quiz** ✅  

---

### 🚀 Live Demo

Check out the live version of the app here:  
🔗 [makequizzes.netlify.app](https://makequizzes.netlify.app)

---

### 🧠 Learnings

- Efficient state management using Redux state normalization  
- Dynamic routing and building UI based on current route  
- Conditional rendering with fallback handling (e.g. missing quiz/cards)  
- Structuring scalable React + Redux projects  

---

### 🏁 Future Improvements

- 🌐 Persisting favorite cards in **LocalStorage**  
- 📊 Adding **quiz scores** and attempt **history tracking**  
- 🔔 Providing **feedback for correct/incorrect answers**  
- 🔤 Implementing **search and filter** functionality for quizzes and cards

---


### 👤 Author

Built as part of **Codecademy’s Redux Flashcards Challenge Project** with additional custom features.

🛠 Maintained by **Selen Karakaya**  
📫 [selennurkarakayaa@gmail.com](mailto:selennurkarakayaa@gmail.com)  
🐙 [github.com/selenkarakaya](https://github.com/selenkarakaya)  
📌 [LinkedIn](https://www.linkedin.com/in/selenkarakaya/)  
🌍 [Portfolio Website](https://selenkarakaya.netlify.app/)  


