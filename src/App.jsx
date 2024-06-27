import React, { useEffect, useState } from "react";
import { TodoProvider, useTodo } from "./contexts/TodoContext";
import {TodoForm,TodoList} from './components'
const App = () => {
  
// get todos from localstorate  
useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(!todos && todos.length> 0){
      setTodos(todos)
    }
    setTodos(todos);
  });
// set todos to localstorate  
  useEffect(()=>{
 localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  const [todos, setTodos] = useState([]);
  const { addTodo, deleteTodo, editTodo, checkTodo } = useTodo();
  addTodo = (todoContent) => {
    setTodos((pre) => [{ ...todoContent, id: Date.now() }, ...pre]);
  };
  deleteTodo = (id) => {
    setTodos((pre) => pre.filter((elm) => elm.id !== id));
  };
  editTodo = (id, todoContent) => {
    setTodos((pre) => pre.map((elm) => (elm.id === id ? todoContent : elm)));
  };
  checkTodo = (id) => {
    setTodos((pre) =>
      pre.map((elm) =>
        elm.id === id ? { ...elm, isChecked: !elm.isChecked } : elm
      )
    );
  };
  return (
    <TodoProvider value={{ addTodo, deleteTodo, editTodo, checkTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>
            <div key={todo.id} className="w-full ">
            <TodoList todo={todo} />

            </div>
            )}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
