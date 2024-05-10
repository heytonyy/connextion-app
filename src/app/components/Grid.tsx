"use client";

import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/state/hooks";
import { setGrid } from "@/state/reducers";
import { transformData, setCardsByPosition } from "@/utils/utils";
import { CardType, CategoryType } from "@/state/types";
import Card from "@/components/Card";
import MenuButtons from "./MenuButtons";
import FoundCategory from "./FoundCategory";

export default function Grid() {
  const { cards, foundCategories } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/cards/get-cards");
        const jsonData = await response.json();
        const cardData = transformData(jsonData);
        const sortedCards = setCardsByPosition(cardData);
        dispatch(setGrid(sortedCards));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex w-[360px] flex-col gap-2 sm:w-[420px] sm:gap-4 md:w-[600px]">
      <div className="grid w-full gap-3 sm:gap-4">
        {foundCategories &&
          foundCategories.map((found: CategoryType, i) => (
            <div key={i}>
              <FoundCategory
                category={found.category}
                content={found.content}
                color={found.color}
              />
            </div>
          ))}
      </div>
      <div className="grid w-full grid-cols-4 gap-3 sm:gap-4">
        {cards &&
          cards.map((card: CardType) => (
            <div key={card.position}>
              <Card
                position={card.position}
                category={card.category}
                content={card.content}
                color={card.color}
              />
            </div>
          ))}
      </div>
      <MenuButtons />
    </div>
  );
}
