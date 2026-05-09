import React, { createContext, useEffect, useState } from "react";
export interface TodoType {
  id: string;
  title: string;
  isCompleted: boolean;
}
interface TodoContextType {
  allTodo: TodoType[];
  setAllTodo: React.Dispatch<React.SetStateAction<TodoType[]>>;
  deleteHandler: (id: string) => void;
  editTodo: TodoType | null;
  setEditTodo: React.Dispatch<React.SetStateAction<TodoType | null>>;
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined);
function TodoProvider({ children }) {
  const [allTodo, setAllTodo] = useState<TodoType[]>(() => {
    const savedData = localStorage.getItem("todos");
    return savedData ? JSON.parse(savedData) : [];
  });
  const [editTodo, setEditTodo] = useState<TodoType | null>(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(allTodo));
  }, [allTodo]);
  const deleteHandler = (id: string) => {
    const todos = allTodo.filter((item) => item.id !== id);
    setAllTodo(todos);
  };

  return <TodoContext.Provider value={{ allTodo, setAllTodo, deleteHandler, editTodo, setEditTodo }}>{children}</TodoContext.Provider>;
}

export default TodoProvider;
