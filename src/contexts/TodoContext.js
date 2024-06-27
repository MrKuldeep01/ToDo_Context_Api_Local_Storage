import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: Date.now(),
      todoContent: "",
      isChecked: false,
    },
  ],
  addTodo: (todoContent) => {},
  deleteTodo: (id) => {},
  editTodo: (id, todoContent) => {},
  checkTodo: (id) => {},
});

export const TodoProvider = TodoContext.Provider;
export const useTodo = () => {
  return useContext(TodoContext);
};
