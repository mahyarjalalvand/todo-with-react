import { useState } from "react";
import useTodo from "../hooks/useTodo";
import { v4 } from "uuid";
import type { TodoType } from "../contexts/TodoContext";

function TodoForm() {
  const { setAllTodo } = useTodo();
  const [todo, setTodo] = useState<string>("");
  const allTodoHandler = () => {
    const todoItem: TodoType = { id: v4(), title: todo, isCompleted: false };
    setAllTodo((prv) => [...prv, todoItem]);
    setTodo("");
  };

  return (
    <div>
      <form className="flex items-stretch gap-4">
        <input
          type="text"
          className="outline-0 text-sm border border-blue-300 rounded-lg py-1.5 ps-3 focus:border-blue-500 transition-all duration-200"
          name=""
          id=""
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="button" onClick={allTodoHandler} className="bg-blue-500 py-1.5 rounded-lg px-4 text-sm text-white cursor-pointer">
          ثبت
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
