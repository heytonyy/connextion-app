type StoreState = {
  mode: string;
  cards: CardType[];
  selectedCards: CardType[];
  foundCategories: CategoryType[];
  resetSelectedCards: boolean;
  mistakesRemaining: number;
};

type CardType = {
  position: number;
  category: string;
  content: string;
  color: string;
};

type CategoryType = {
  category: string;
  content: string;
  color: string;
};

export type { StoreState, CardType, CategoryType };
