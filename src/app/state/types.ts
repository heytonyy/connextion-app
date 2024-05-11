import { ObjectId } from "mongodb";

type StoreState = {
  mode: string;
  cards: CardType[];
  selectedCards: CardType[];
  foundCategories: CategoryType[];
  resetSelectedCards: boolean;
  mistakesRemaining: number;
  time: string | null;
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

type LeaderBoardTime = {
  _id: ObjectId;
  name: string;
  time: number;
  date: string;
};

export type { StoreState, CardType, CategoryType, LeaderBoardTime };
