import { ThemeToggler } from "@/app/components/ThemeToggler";
import Grid from "@/app/components/Grid";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center ">
      <h1 className="mb-1 text-6xl font-extrabold text-blue-500">
        Connextions
        <ThemeToggler />
      </h1>
      <p className="mb-10">
        My version of the New York Times Connections using Next.js
      </p>
      <Grid />
    </div>
  );
}
