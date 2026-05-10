import type { TodoType } from "../contexts/TodoContext";
import useTodo from "../hooks/useTodo";

function TodoItem({ item }: { item: TodoType }) {
  const { setAllTodo, deleteHandler, setEditTodo, setTodo } = useTodo();

  const toggleCheckbox = () => {
    setAllTodo((prv) => prv.map((prvTodo) => (prvTodo.id === item.id ? { ...prvTodo, isCompleted: !prvTodo.isCompleted } : prvTodo)));
  };

  const editHandler = () => {
    setEditTodo(item);
    setTodo(item.title);
  };

  return (
    <li>
      <div className="flex justify-between items-center">
        <span className="cursor-pointer">{item.title}</span>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <input type="checkbox" name="status" id="status" onChange={toggleCheckbox} checked={item.isCompleted} />
          </div>
          <div className="flex items-center gap-4 [&_button]:text-white [&_button]:px-3 [&_button]:rounded-lg [&_button]:py-1 [&_button]:cursor-pointer">
            <button onClick={() => deleteHandler(item.id)} className="bg-red-500">
              حذف
            </button>
            <button className="bg-amber-400" onClick={editHandler}>
              ویرایش
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default TodoItem;
