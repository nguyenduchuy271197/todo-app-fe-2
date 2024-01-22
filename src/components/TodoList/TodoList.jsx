import TodoItem from "./TodoItem";

export default function TodoList({ todos, onDelete, onStatusChange }) {
  return (
    <ul className="flex flex-col gap-4 mt-12">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          name={todo.name}
          complete={todo.done}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </ul>
  );
}
