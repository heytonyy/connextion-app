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
