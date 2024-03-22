import { CardType } from "@/state/types";

export const isServer = () => typeof window === "undefined";

export const transformData = (data: any): CardType[] => {
  const result: CardType[] = [];

  data.categories.forEach((category: any) => {
    category.cards.forEach((card: any) => {
      result.push({
        category: category.title,
        content: card.content,
      });
    });
  });

  return result;
};
