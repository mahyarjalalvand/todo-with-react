import useTodo from "../hooks/useTodo";
import TodoItem from "./TodoItem";

function TodoList() {
  const { allTodo } = useTodo();
  return (
    <div className="w-full border border-gray-300 rounded-lg py-6 px-3">
      {allTodo.length ? (
        <ul>
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
