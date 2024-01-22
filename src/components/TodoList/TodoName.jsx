export default function TodoName({ name, complete }) {
  return <p className={complete ? "line-through" : ""}>{name}</p>;
}
