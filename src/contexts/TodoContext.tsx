import React, { createContext, useState } from "react";
export interface TodoType {
  id: string;
  title: string;
  isCompleted: boolean;
}
interface TodoContextType {
  allTodo: TodoType[];
  setAllTodo: React.Dispatch<React.SetStateAction>;
  deleteHandler: (id: string) => void;
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined);
function TodoProvider({ children }) {
  const [allTodo, setAllTodo] = useState([]);

  const deleteHandler = (id: string) => {
    const todos = allTodo.filter((item) => item.id !== id);
    console.log(todos);
    setAllTodo(todos);
  };

  return <TodoContext.Provider value={{ allTodo, setAllTodo, deleteHandler }}>{children}</TodoContext.Provider>;
}

export default TodoProvider;
