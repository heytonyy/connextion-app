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
      state.foundCategories = [];
      state.resetSelectedCards = false;
    },
    deselectAllCards: (state) => {
      state.selectedCards = [];
      state.resetSelectedCards = !state.resetSelectedCards;
    },

    selectCard: (state, action) => {
      // Find the full card object from `cards` array using a unique identifier (position)
      const fullCard = state.cards.find(
        (card) => card.position === action.payload.position
      );
      if (fullCard) {
        // Push the full card object, ensuring all properties including `color` are included
        state.selectedCards.push(fullCard);
      } else {
        console.error("Card not found in grid");
      }
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
        // Construct content string from each of the found categories in the form of
        // "Content1, Content2, Content3, and Content4"
        const content = state.selectedCards
          .map((card) => card.content)
          .join(", ");
        // Add the category to the foundCategories array
        state.foundCategories.push({
          category: categoryToRemove,
          content: content,
          color: state.selectedCards[0].color,
        });
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
