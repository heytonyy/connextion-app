import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../state/hooks";
// import { shuffleCardsByPosition } from "@/utils/utils";

export default function Button() {
  const dispatch = useAppDispatch();
  const { cards } = useAppSelector((state) => state.cards);

  const handleButtonClick = () => {
    console.log("Shuffled!");
    // const shuffled = shuffleCardsByPosition(cards);
    // dispatch({ type: "SET_CARDS", payload: shuffled });
  };

  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <button
        className="w-fit bg-indigo-500 px-6 py-2 font-medium text-white shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
        onClick={handleButtonClick}
      >
        Shuffle
      </button>
    </div>
  );
}
