import { useEffect, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState("00:00");

  useEffect(() => {
    const initTime = new Date();

    const showTimer = (ms: number) => {
      const second = Math.floor((ms / 1000) % 60)
        .toString()
        .padStart(2, "0");
      const minute = Math.floor((ms / 1000 / 60) % 60)
        .toString()
        .padStart(2, "0");
      setTime(minute + ":" + second);
    };

    const intervalId = setInterval(() => {
      const left = new Date().getTime() - initTime.getTime();
      showTimer(left);
    }, 10); // Update interval to 10ms for better performance

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex w-20 items-center justify-center text-base text-white">
      {time}
    </div>
  );
}
