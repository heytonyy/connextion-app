import { useState } from "react";

interface CardProps {
  category: string;
  content: string;
}

export default function Card({ category, content }: CardProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className="cursor-pointer rounded-md bg-gray-200 p-4"
      onClick={() => handleClick()}
    >
      <div className="text-center">
        <h1>{content}</h1>
      </div>
    </div>
  );
}
