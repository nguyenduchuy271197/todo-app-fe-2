import { Plus } from "lucide-react";
import { useState } from "react";

export default function TodoAdd({ onAdd }) {
  const [text, setText] = useState("");

  return (
    <div className="flex gap-1">
      <input
        type="text"
        placeholder="Type here"
        className="w-full input input-bordered"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="btn"
        onClick={() => {
          onAdd(text);
          setText("");
        }}
      >
        Thêm
        <Plus />
      </button>
    </div>
  );
}
