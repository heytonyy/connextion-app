import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { makeGuess } from "../state/reducers";

export default function Button() {
  const dispatch = useAppDispatch();
  const { selectedCards } = useAppSelector((state) => state);

  const handleButtonClick = () => {
    if (selectedCards.length == 4) {
      console.log("Guessed!");
      dispatch(makeGuess());
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        // className="w-fit bg-indigo-500 px-6 py-2 font-medium text-white shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
        className={`w-fit bg-indigo-500 px-6 py-2 font-medium text-white shadow-[3px_3px_0px_black] ${
          selectedCards.length < 4
            ? "cursor-not-allowed opacity-50"
            : "transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-indigo-600 hover:shadow-none"
        }`}
        onClick={handleButtonClick}
      >
        Submit
      </button>
    </div>
  );
}
