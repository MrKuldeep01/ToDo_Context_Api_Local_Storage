import React, { useEffect, useState } from "react";
import { TodoProvider } from "./contexts/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  // get todos from localStorage
  useEffect(() => {
    const TodoArray = JSON.parse(localStorage.getItem("todos"));
    if (TodoArray && TodoArray.length > 0) {
      setTodos(TodoArray);
    }
  }, []);

  // set todos to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todoContent) => {
    setTodos((prev) => [{ ...todoContent, id: Date.now() }, ...prev]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((elm) => elm.id !== id));
  };

  const editTodo = (id, todoContent) => {
    setTodos((prev) =>
      prev.map((elm) => (elm.id === id ? todoContent : elm))
    );
  };

  const checkTodo = (id) => {
    setTodos((prev) =>
      prev.map((elm) =>
        elm.id === id ? { ...elm, checked: !elm.checked } : elm
      )
    );
  };

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, editTodo, checkTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((elm)=>(
              <div className="w-full" key={elm.id} >
                <TodoList todo={elm} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
