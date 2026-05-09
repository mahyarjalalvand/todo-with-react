import { useState } from "react";
import useTodo from "../hooks/useTodo";
import { v4 } from "uuid";
import type { TodoType } from "../contexts/TodoContext";

function TodoForm() {
  const { setAllTodo, editTodo, setEditTodo } = useTodo();
  const [todo, setTodo] = useState<string>("");

  const allTodoHandler = () => {
    if (!todo.trim()) return;
    const todoItem: TodoType = { id: v4(), title: todo.trim(), isCompleted: false };
    setAllTodo((prv) => [...prv, todoItem]);
    setTodo("");
  };
  const cancleEditHandler = () => setEditTodo(null);
  return (
    <div>
      <form className="flex items-stretch gap-4 [&_button]:cursor-pointer">
        <input
          type="text"
          className="outline-0 text-sm border border-blue-300 rounded-lg py-1.5 ps-3 focus:border-blue-500 transition-all duration-200"
          name=""
          id=""
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="button" onClick={allTodoHandler} className="bg-blue-500 py-1.5 rounded-lg px-4 text-sm text-white">
          {editTodo ? "ویرایش" : "ثبت"}
        </button>
        {editTodo && (
          <button type="button" onClick={cancleEditHandler} className="bg-red-500 text-white py-1.5 px-4 rounded-lg text-sm">
            انصراف
          </button>
        )}
      </form>
    </div>
  );
}

export default TodoForm;
