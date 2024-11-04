"use client";

import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";

export const NewTodo = () => {
  const [todoData, settodoData] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(todoData.trim().length === 0) return;
    
    console.log("On submiteed",todoData);
  };

  return (
    <form className="flex w-full p-5 m-4" onSubmit={onSubmit}>
      <input
        type="text"
        onChange={(e)=> settodoData(e.target.value)}
        value={todoData}
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?"
      />

      <button
        type="submit"
        className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
      >
        Crear
      </button>

      <span className="flex flex-1"></span>

      <button
        //TODO: onClick={ () => deleteCompleted() }
        type="button"
        className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all"
      >
        <IoTrashOutline />
        Delete
      </button>
    </form>
  );
};
