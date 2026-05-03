import { useState } from "react";
import FilterButton from "./components/FilterButton";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
export type FilterType = "all" | "completed" | "noCompleted";

function App() {
  const [filter, setFilter] = useState<FilterType>("all");

  return (
    <div className="container h-svh flex flex-col gap-5 justify-start items-center pt-24">
      <div className="flex justify-between w-full">
        <TodoForm />
        <FilterButton setFilter={setFilter} />
      </div>
      <TodoList filter={filter} />
    </div>
  );
}

export default App;
