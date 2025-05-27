import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    cardIds: [], // favorite card ID
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      if (state.cardIds.includes(id)) {
        state.cardIds = state.cardIds.filter((cardId) => cardId !== id); // removed existing id
      } else {
        state.cardIds.push(id); // add id inside cardIds list
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
