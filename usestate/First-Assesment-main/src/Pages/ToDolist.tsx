import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const ToDoList = () => {
  const [todo, setTodo] = useState("");
  const [task, setTask] = useState<string[]>([]);

  const addTodo = () => {
    if (!todo.trim()) return;
    setTask([...task, todo.trim()]);
    setTodo("");
  }

  const delTodo = (index: number) => {
    setTask((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-b from-sky-300 to-teal-300">
      <div className="text-center mt-10">

        <h1 className="text-4xl md:text-5xl font-bold text-black mb-10">
          Add Your To-Do
        </h1>

        <div className="flex items-center justify-center gap-3 mb-8">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter Your Task.."
            className="w-72 md:w-96 bg-white/70 px-4 py-3 rounded-lg shadow-xl outline-none placeholder-gray-500"
          />
          <button
            onClick={addTodo}
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-3 rounded-lg shadow-xl"
          >
            Add
          </button>
        </div>

        
        <ul className="space-y-4">
          {task.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center justify-center gap-3"
            >
              <div className="w-72 md:w-96 bg-white/70 px-4 py-3 rounded-lg shadow-xl text-left">
                {item}
              </div>
              <button
                onClick={() => delTodo(idx)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-4 rounded-lg shadow-xl flex items-center justify-center"
              >
                <MdDelete />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
