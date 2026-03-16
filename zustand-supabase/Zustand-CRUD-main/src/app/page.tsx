"use client";

import { useState } from "react";
import { useTodoStore } from "@/app/store/todoStore";

export default function Home() {
  const { todos, addTodo, deleteTodo, toggleTodo, updateTodo } =
    useTodoStore();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [editId, setEditId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");

  const handleAdd = () => {
    if (!title.trim()) return;
    addTodo(title, desc);
    setTitle("");
    setDesc("");
  };

  const handleUpdate = (id: string) => {
    updateTodo(id, editTitle, editDesc);
    setEditId(null);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10 px-4">
      <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg w-full max-w-md space-y-3">
        <input
          className="w-full p-3 rounded-lg bg-black border border-zinc-700 focus:outline-none focus:border-blue-500"
          placeholder="Enter title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="w-full p-3 rounded-lg bg-black border border-zinc-700 focus:outline-none focus:border-blue-500"
          placeholder="Enter description..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button
          onClick={handleAdd}
          className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg font-semibold"
        >
          Add
        </button>
      </div>

      <div className="mt-8 w-full max-w-md space-y-4">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="bg-zinc-900 p-5 rounded-2xl  shadow-md border border-zinc-800"
          >
            {editId === todo.id ? (
              <>
                <input
                  className="w-full mb-2 p-2 rounded bg-black border border-zinc-700"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <input
                  className="w-full mb-3 p-2 rounded bg-black border border-zinc-700"
                  value={editDesc}
                  onChange={(e) => setEditDesc(e.target.value)}
                />
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="bg-green-600 px-4 py-2 rounded-lg"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <div
                  onClick={() => toggleTodo(todo.id)}
                  className="cursor-pointer text-center"
                >
                  <h2
                    className={`text-lg font-semibold ${
                      todo.completed ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {todo.title}
                  </h2>

                  <p className="text-sm text-gray-400">{todo.description}</p>
                </div>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => {
                      setEditId(todo.id);
                      setEditTitle(todo.title);
                      setEditDesc(todo.description);
                    }}
                    className="flex-1 bg-purple-600 hover:bg-purple-700 transition py-2 rounded-lg font-medium"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="flex-1 bg-red-600 hover:bg-red-700 transition py-2 rounded-lg font-medium"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}