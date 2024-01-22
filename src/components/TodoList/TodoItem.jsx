import TodoStatusBtn from "./TodoStatusBtn";
import TodoName from "./TodoName";
import TodoDeleteBtn from "./TodoDeleteBtn";

export default function TodoItem({
  id,
  name,
  complete,
  onDelete,
  onStatusChange,
}) {
  return (
    <li className="flex items-center justify-between p-4 border rounded-lg">
      <div className="flex items-center gap-4">
        <TodoStatusBtn
          id={id}
          complete={complete}
          onStatusChange={onStatusChange}
        />
        <TodoName name={name} complete={complete} />
      </div>
      <div>
        <TodoDeleteBtn id={id} onDelete={onDelete} />
      </div>
    </li>
  );
}
