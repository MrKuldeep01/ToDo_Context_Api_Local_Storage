import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

const TodoList = ({ todo }) => {
  const { editTodo, deleteTodo, checkTodo } = useTodo();
  const [isEditable, setIsEditable] = useState(false);
  const [todoMessage, setTodoMessage] = useState(todo.todoContent);

  const updateTodo = () => {
    editTodo(todo.id, {...todo,todoContent: todoMessage });
    setIsEditable(false);
  };

  const checkToggle = () => {
    checkTodo(todo.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
        todo.checked ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.checked}
        onChange={checkToggle}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.checked ? "line-through" : ""}`}
        value={todoMessage}
        onChange={(e) => setTodoMessage(e.target.value)}
        readOnly={!isEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.checked) return;

          if (isEditable) {
            updateTodo();
          } else setIsEditable((prev) => !prev);
        }}
        disabled={todo.checked}
      >
        {isEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
};

export default TodoList;
