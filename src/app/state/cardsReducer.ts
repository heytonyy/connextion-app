import { CardType } from "@/state/types";

interface CardsState {
  cards: CardType[];
  selectedCards: CardType[];
}

const initialState: CardsState = {
  cards: [],
  selectedCards: [],
};

const cardsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_CARDS":
      return { ...state, cards: action.payload };
    case "SELECT_CARD":
      return {
        ...state,
        selectedCards: [...state.selectedCards, action.payload],
      };
    default:
      return state;
  }
};

export default cardsReducer;
