import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const useTodo = () => {
  const todo = useContext(TodoContext);
  if (!todo) {
    throw new Error("todo not found");
  }
  return todo;
};
export default useTodo;
