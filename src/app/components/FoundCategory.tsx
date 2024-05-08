import { CategoryType } from "../state/types";

export default function FoundCategory({
  category,
  content,
  color,
}: CategoryType) {
  return (
    <div className={`w-full p-4 text-black`} style={{ backgroundColor: color }}>
      <div className="">{category}</div>
      <div>{content}</div>
    </div>
  );
}
