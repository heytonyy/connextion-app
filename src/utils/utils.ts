import { CardType } from "@/state/types";

export const isServer = () => typeof window === "undefined";

interface Category {
  title: string;
  cards: CardData[];
}

interface CardData {
  position: number;
  content: string;
}

export const transformData = (data: any): CardType[] => {
  const result: CardType[] = [];

  const colors = ["#fbdb6b", "#a3c35b", "#b4c4f3", "#bb84c4"];

  let colorIndex = 0;

  data.categories.forEach((category: Category) => {
    category.cards.forEach((card: CardData) => {
      result.push({
        category: category.title,
        content: card.content,
        position: card.position,
        color: colors[colorIndex],
      });
    });
    colorIndex += 1;
  });

  return result;
};

export const setCardsByPosition = (cards: CardType[]): CardType[] => {
  return cards.sort((a, b) => a.position - b.position);
};

export const shuffleCardsByPosition = (cards: CardType[]): CardType[] => {
  return cards.sort(() => Math.random() - 0.5);
};

export const getClientDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 1); // Add 1 day to the current date
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const dateString = `${year}-${month}-${day}`;
  return dateString;
};
