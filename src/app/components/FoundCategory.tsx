import { CategoryType } from "../state/types";

export default function FoundCategory({
  category,
  content,
  color,
}: CategoryType) {
  return (
    <div
      className={`w-full p-2 text-center text-black sm:p-4`}
      style={{ backgroundColor: color }}
    >
      <div className="font-bold">{category}</div>
      <div>{content}</div>
    </div>
  );
}
