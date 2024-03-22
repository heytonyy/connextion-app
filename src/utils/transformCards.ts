import { CardType } from "@/state/types";

const transformData = (data: any): CardType[] => {
  const result: CardType[] = [];

  data.categories.forEach((category: any) => {
    category.cards.forEach((card: any) => {
      result.push({
        category: category.title,
        content: card.content,
        position: card.position,
      });
    });
  });

  return result;
};

export default transformData;
