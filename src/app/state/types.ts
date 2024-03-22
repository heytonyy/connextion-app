type StoreState = {
  cards: CardType[];
  mode: string;
};

type CardType = {
  category: string;
  content: string;
};

export type { StoreState, CardType };
