import FilterButton from "./components/FilterButton";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container h-svh flex flex-col gap-5 justify-start items-center pt-24">
      <div className="flex justify-between w-full">
        <TodoForm />
        <FilterButton />
      </div>
      <TodoList />
    </div>
  );
}

export default App;
