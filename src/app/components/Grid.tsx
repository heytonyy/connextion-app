"use client";

import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/state/hooks";
import { setCards } from "@/state/reducers";
import { transformData, setCardsByPosition } from "@/utils/utils";
import { CardType } from "@/state/types";
import Card from "@/components/Card";
import ShuffleButton from "@/components/ShuffleButton";

export default function Grid() {
  const { cards } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/cards/get-cards");
        const jsonData = await response.json();
        const cardData = transformData(jsonData);
        const sortedCards = setCardsByPosition(cardData);
        dispatch(setCards(sortedCards));

        // console.log("Fetched data:", sortedData);
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
      <div className="grid grid-cols-4 gap-4">
        {cards &&
          cards.map((card: CardType) => (
            <div key={card.position}>
              <Card
                position={card.position}
                category={card.category}
                content={card.content}
              />
            </div>
          ))}
      </div>
      <div className="items-center justify-center">
        <ShuffleButton />
      </div>
    </>
  );
}
