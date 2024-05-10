"use client";

import Grid from "@/components/Grid";
import useDate from "@/hooks/useDate";
import GithubCorner from "react-github-corner";

export default function Home() {
  const formattedDate = useDate();
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <div className="my-4 flex gap-4 text-2xl font-extrabold text-blue-500 sm:text-4xl">
        ConNEXTions{" "}
        <span className="flex items-center text-2xl sm:text-4xl">
          {formattedDate}
        </span>
      </div>
      <div>
        <p className="my-2 text-center sm:text-lg">
          Create four groups of four!
        </p>
      </div>
      <Grid />
      <GithubCorner href="https://github.com/heytonyy/connextion-app" />
    </div>
  );
}
