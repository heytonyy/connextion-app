import { useAppDispatch } from "@/state/hooks";
import { shuffleCards } from "@/state/reducers";

export default function Button() {
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    console.log("Shuffled!");
    dispatch(shuffleCards());
  };

  return (
    <div className="flex items-center justify-center">
      <button
        className="w-fit bg-indigo-500 px-6 py-2 font-medium text-white shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-indigo-600 hover:shadow-none"
        onClick={handleButtonClick}
      >
        Shuffle
      </button>
    </div>
  );
}
