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
    <>
      <>
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
      </>
      <div className="grid grid-cols-4 gap-4">
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
    </>
  );
}
