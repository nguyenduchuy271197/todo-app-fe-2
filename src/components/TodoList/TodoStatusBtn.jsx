import { Check } from "lucide-react";

export default function TodoStatusBtn({ id, complete, onStatusChange }) {
  return (
    <button
      className={`size-8 border rounded-full flex items-center justify-center ${
        complete ? "bg-green-500 text-white" : ""
      }`}
      onClick={() => onStatusChange(id)}
    >
      {complete && <Check className="size-4" />}
    </button>
  );
}
