import { TodoStore } from "@/Typescript/Interface";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";


export const useTodoStore = create<TodoStore>()(
  devtools(
    persist(
      (set) => ({
        todos: [],

        addTodo: (title, description) =>
          set((state) => ({
            todos: [
              ...state.todos,
              {
                id: crypto.randomUUID(),
                title,
                description,
                completed: false,
              },
            ],
          })),

        deleteTodo: (id) =>
          set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
          })),

        toggleTodo: (id) =>
          set((state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id
                ? { ...todo, completed: !todo.completed }
                : todo
            ),
          })),

        updateTodo: (id, title, description) =>
          set((state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id
                ? { ...todo, title, description }
                : todo
            ),
          })),
      }),
      {
        name: "todo-storage",
      }
    )
  )
);