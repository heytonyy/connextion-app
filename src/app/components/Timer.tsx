import { useEffect, useState, useRef } from "react";
import { useAppSelector, useAppDispatch } from "@/state/hooks";
import { setTimeToState } from "../state/reducers";

export default function Timer() {
  const [time, setTime] = useState("00:00");
  const { mistakesRemaining, foundCategories } = useAppSelector(
    (state) => state
  );
  const dispatch = useAppDispatch();

  // useRef so that the value is not reset on re-render
  const initTime = useRef(new Date());
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  // useEffect to update the timer every 10ms
  useEffect(() => {
    const showTimer = (ms: number) => {
      const second = Math.floor((ms / 1000) % 60)
        .toString()
        .padStart(2, "0");
      const minute = Math.floor((ms / 1000 / 60) % 60)
        .toString()
        .padStart(2, "0");
      setTime(minute + ":" + second);
    };

    intervalId.current = setInterval(() => {
      const left = new Date().getTime() - initTime.current.getTime();
      showTimer(left);
    }, 10); // Update interval to 10ms for better performance

    return () => {
      if (intervalId.current !== null) {
        clearInterval(intervalId.current);
      }
    };
  }, []);

  // useEffect to checks for when there is no more mistakes
  useEffect(() => {
    if (mistakesRemaining === 0 && intervalId.current !== null) {
      clearInterval(intervalId.current!);
      intervalId.current = null;
    }
  }, [mistakesRemaining, foundCategories]);

  // useEffect to checks when you have found all categories
  useEffect(() => {
    if (foundCategories.length === 4) {
      dispatch(setTimeToState(time));
      clearInterval(intervalId.current!);
      intervalId.current = null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [foundCategories]);

  return (
    <div className="flex w-20 items-center justify-center text-base text-white">
      {time}
    </div>
  );
}
