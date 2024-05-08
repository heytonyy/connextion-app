import { useEffect, useState } from "react";
import { CardType } from "@/state/types";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { selectCard, deselectCard } from "@/state/reducers";

export default function Card({ category, content, position, color }: CardType) {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useAppDispatch();
  const { selectedCards, resetSelectedCards } = useAppSelector(
    (state) => state
  );

  const handleClick = () => {
    if (isClicked) {
      dispatch(deselectCard({ category, content, position }));
      setIsClicked(false);
    } else if (selectedCards.length < 4) {
      dispatch(selectCard({ category, content, position }));
      setIsClicked(true);
    }
    console.log(`Clicked ${category} card in position ${position}!`);
  };

  useEffect(() => {
    setIsClicked(false);
  }, [resetSelectedCards]);

  return (
    <button
      className={`w-full p-4 font-medium text-white shadow-[3px_3px_0px_black] transition-all ${
        isClicked
          ? "translate-x-[3px] translate-y-[3px] bg-black shadow-none"
          : "bg-indigo-500 hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-indigo-600 hover:shadow-none"
      }`}
      onClick={() => handleClick()}
    >
      {content}
    </button>
  );
}
