import { useState } from "react";
import TodoAdd from "./components/TodoAdd";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList/TodoList";
import TodoHeader from "./components/TodoHeader";

const initialTodos = [
  {
    id: 1,
    name: "Learn JS",
    done: true,
  },
  {
    id: 2,
    name: "Learn HTML",
    done: false,
  },
  {
    id: 3,
    name: "Learn CSS",
    done: true,
  },
  {
    id: 4,
    name: "Learn React",
    done: false,
  },
];
export default function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [onlyComplete, setOnlyComplete] = useState(false);

  const filteredTodos = onlyComplete
    ? todos.filter((todo) => todo.done)
    : todos;

  function handleAdd(newTaskName) {
    const nextTodos = [...todos];
    nextTodos.push({
      id: Math.random(),
      name: newTaskName,
      done: false,
    });

    setTodos(nextTodos);
  }

  function handleDelete(id) {
    const nextTodos = todos.filter((todo) => todo.id !== id);
    setTodos(nextTodos);
  }

  function handleStatusChange(id) {
    const nextTodos = [...todos];
    const todo = nextTodos.find((todo) => todo.id === id);
    todo.done = !todo.done;
    setTodos(nextTodos);
  }

  function handleFilter(checked) {
    setOnlyComplete(checked);
  }

  return (
    <div className="max-w-screen-sm px-8 py-12 mx-auto">
      <div>
        <TodoHeader />
        <TodoAdd onAdd={handleAdd} />
        <TodoFilter onlyComplete={onlyComplete} onFilter={handleFilter} />
        <TodoList
          todos={filteredTodos}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
        />
      </div>
    </div>
  );
}
