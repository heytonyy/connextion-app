import { createSlice } from "@reduxjs/toolkit";
import { StoreState } from "@/state/types";

const initialState: StoreState = {
  cards: [],
  selectedCards: [],
};

export const cardSlice = createSlice({
  name: "cards-slice",
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
      state.selectedCards = [];
    },
    selectCard: (state, action) => {
      state.selectedCards.push(action.payload);
    },
    deselectCard: (state, action) => {
      state.selectedCards = state.selectedCards.filter(
        (card) => card.position !== action.payload.position
      );
    },
  },
});

export const { setCards, selectCard, deselectCard } = cardSlice.actions;
export default cardSlice.reducer;
