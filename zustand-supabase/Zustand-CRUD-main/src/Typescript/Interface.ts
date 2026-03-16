export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface TodoStore {
  todos: Todo[];
  addTodo: (title: string, description: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  updateTodo: (id: string, title: string, description: string) => void;
}