import React, { useRef, useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
  const [todoContent, setTodoContent] = useState("");
  const { addTodo } = useTodo();
  const add = (e) => {
    e.preventDefault();
    if (!todoContent) {
      alert("content not available");
    } else {
      addTodo({ todoContent, isChecked: false });
      setTodoContent('')
    }
  };

  return (
    <form className="flex" onSubmit={add}>
      <input
        value={todoContent}
        onChange={(e) => {
          setTodoContent(e.target.value);
          e.target.value = "";
        }}
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
