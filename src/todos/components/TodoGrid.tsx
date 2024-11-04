"use client"
import { Todo } from "@prisma/client";
import { TodoItem } from "./TodoItem";
import * as todosApi from "../helpers/todo";
import { useRouter } from "next/navigation";

interface Props {
  todos?: Todo[];
}

export const TodoGrid = ({ todos = [] }: Props) => {
  const router =useRouter();
 const toogleTodo= async  (id: string, complete: boolean) => {
  const updateTodo =await todosApi.updateTodo(id, complete);
  console.log(updateTodo)
  router.refresh()
 }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {todos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} updateTodo={toogleTodo} />
      ))}
    </div>
  );
};
