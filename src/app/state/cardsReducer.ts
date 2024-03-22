import { CardType } from "@/state/types";

interface CardsState {
  cards: CardType[];
}

const initialState: CardsState = {
  cards: [],
};

const cardsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_CARDS":
      return { ...state, cards: action.payload };
    default:
      return state;
  }
};

export default cardsReducer;
