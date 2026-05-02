import type { TodoType } from "../contexts/TodoContext";

function TodoItem({ item }: { item: TodoType }) {
  return (
    <li>
      <div className="flex justify-between items-center">
        <span className="cursor-pointer">{item.title}</span>
        <div>
          <div></div>
          <div className="flex items-center gap-4 ">
            <button>حذف</button>
            <button>ویرایش</button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default TodoItem;
