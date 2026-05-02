import { useState } from "react";
export type FilterType = "all" | "completed" | "noCompleted";

function FilterButton() {
  const [filter, setFilter] = useState<FilterType>("all");
  return (
    <div className="flex items-center gap-4 [&_button]:text-white [&_button]:bg-blue-500 [&_button]:rounded-lg [&_button]:px-3 [&_button]:py-1">
      <button>همه</button>
      <button>تکمیل شده</button>
      <button>تکمیل نشده</button>
    </div>
  );
}

export default FilterButton;
