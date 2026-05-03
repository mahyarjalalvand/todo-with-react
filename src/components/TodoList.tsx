import { useState } from "react";
import type { FilterType } from "../App";
import useTodo from "../hooks/useTodo";
import TodoItem from "./TodoItem";

function TodoList({ filter }: { filter: FilterType }) {
  const { allTodo } = useTodo();
  const filtredTodos = allTodo.filter((item) => {
    switch (filter) {
      case "completed":
        return item.isCompleted === true;
      case "noCompleted":
        return item.isCompleted === false;
      default:
      case "all":
        return item;
    }
  });
  return (
    <div className="w-full border border-gray-300 rounded-lg p-6">
      {filtredTodos.length ? (
        <ul className="flex flex-col gap-5">
          {filtredTodos.map((item) => (
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
