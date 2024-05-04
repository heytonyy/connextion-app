import { createSlice } from "@reduxjs/toolkit";
import { StoreState } from "@/state/types";

const initialState: StoreState = {
  mode: "light",
  cards: [],
  selectedCards: [],
  mistakesRemaining: 4,
  foundCategories: [],
  resetSelectedCards: false,
};

export const cardSlice = createSlice({
  name: "cards-slice",
  initialState,
  reducers: {
    setMode(state, action) {
      state.mode = action.payload;
    },
    setGrid: (state, action) => {
      state.cards = action.payload;
      state.selectedCards = [];
      state.mistakesRemaining = 4;
      state.resetSelectedCards = false;
    },
    deselectAllCards: (state) => {
      state.selectedCards = [];
      state.resetSelectedCards = !state.resetSelectedCards;
    },
    selectCard: (state, action) => {
      state.selectedCards.push(action.payload);
    },
    deselectCard: (state, action) => {
      state.selectedCards = state.selectedCards.filter(
        (card) => card.position !== action.payload.position
      );
    },
    shuffleCards: (state) => {
      state.cards = state.cards.sort(() => Math.random() - 0.5);
      // Update positions of cards
      state.cards = state.cards.map((card, index) => ({
        ...card,
        position: index,
      }));
      // Update selectedCards to match the new positions
      state.selectedCards = state.selectedCards.map((card) => {
        const newPosition = state.cards.findIndex(
          (c) => c.position === card.position
        );
        return { ...card, position: newPosition };
      });
    },
    makeGuess: (state) => {
      if (state.mistakesRemaining > 0) {
        // Call checkForCategory from cardSlice.caseReducers
        cardSlice.caseReducers.checkForCategory(state);
      }
    },
    checkForCategory: (state) => {
      const selectedCategories = state.selectedCards.map(
        (card) => card.category
      );
      // Check all the categories are the same
      const isConnection = selectedCategories.every(
        (category) => category === selectedCategories[0]
      );
      if (isConnection) {
        // Removes the cards from the grid with the same category
        const categoryToRemove = selectedCategories[0];
        state.cards = state.cards.filter(
          (card) => card.category !== categoryToRemove
        );
      } else {
        state.mistakesRemaining -= 1;
      }
      // Clear selectedCards & send a signal to reset them
      state.selectedCards = [];
      state.resetSelectedCards = !state.resetSelectedCards;
    },
  },
});

export const {
  setGrid,
  selectCard,
  deselectCard,
  shuffleCards,
  setMode,
  makeGuess,
  deselectAllCards,
} = cardSlice.actions;
export default cardSlice.reducer;
