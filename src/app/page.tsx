"use client";

import Grid from "@/components/Grid";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center ">
      <h1 className="mb-10 text-6xl font-extrabold text-blue-500">
        Connextions
      </h1>
      <Grid />
    </div>
  );
}
