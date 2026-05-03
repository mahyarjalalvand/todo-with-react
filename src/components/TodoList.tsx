import type { FilterType } from "../App";
import useTodo from "../hooks/useTodo";
import TodoItem from "./TodoItem";

function TodoList({ filter }: { filter: FilterType }) {
  const { allTodo } = useTodo();
  return (
    <div className="w-full border border-gray-300 rounded-lg p-6">
      {allTodo.length ? (
        <ul className="flex flex-col gap-5">
          {allTodo.map((item) => (
            <TodoItem key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <p className="text-center">تسکی یافت نشد!</p>
      )}
    </div>
  );
}

export default TodoList;
