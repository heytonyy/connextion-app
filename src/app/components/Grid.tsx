"use client";

import React, { useEffect, useState } from "react";
import { transformData } from "@/utils/utils";
import { useAppDispatch } from "@/state/hooks";
import { CardType } from "@/state/types";
import Card from "@/components/Card";

export default function Grid() {
  const [cards, setCards] = useState<CardType[]>(Array(16).fill(null));

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/cards/get-cards");
        const jsonData = await response.json();

        dispatch({ type: "SET_CARDS", payload: transformData(jsonData) });
        setCards(transformData(jsonData));

        console.log("Data fetched:", jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {cards &&
        cards.map((card, index) => (
          <div
            key={index}
            className="cursor-pointer rounded-md bg-gray-200 p-4"
          >
            {/* Render the card content */}
            <Card category={card.category} content={card.content} />
          </div>
        ))}
    </div>
  );
}
