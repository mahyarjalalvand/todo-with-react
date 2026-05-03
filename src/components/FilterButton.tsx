import type React from "react";

function FilterButton({ setFilter }: { setFilter: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <div className="flex items-center gap-4 [&_button]:text-white [&_button]:bg-blue-500 [&_button]:rounded-lg [&_button]:px-3 [&_button]:py-1">
      <button onClick={() => setFilter("all")}>همه</button>
      <button onClick={() => setFilter("completed")}>تکمیل شده</button>
      <button onClick={() => setFilter("noCompleted")}>تکمیل نشده</button>
    </div>
  );
}

export default FilterButton;
