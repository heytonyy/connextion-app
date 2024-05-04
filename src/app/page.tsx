"use client";

import Grid from "@/components/Grid";
import useDate from "@/hooks/useDate";

export default function Home() {
  const formattedDate = useDate();
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <div className="my-4 flex gap-8 text-6xl font-extrabold text-blue-500">
        Connextions{" "}
        <span className="flex items-center text-4xl">{formattedDate}</span>
      </div>
      <div>
        <p className="my-2 text-center">Create four groups of four!</p>
      </div>
      <Grid />
    </div>
  );
}
