import { createSlice } from "@reduxjs/toolkit";

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {},
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id, topicId, name, cardIds } = action.payload;
      state.quizzes[id] = {
        id,
        topicId,
        name,
        cardIds,
      };
    },
  },
});

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
