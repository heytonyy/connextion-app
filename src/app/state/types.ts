type StoreState = {
  cards: CardType[];
  selectedCards: CardType[];
};

type CardType = {
  position: number;
  category: string;
  content: string;
};

export type { StoreState, CardType };
