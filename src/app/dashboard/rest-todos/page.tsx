import { NewTodo } from "@/todos/components/NewTodo";
import { TodoGrid } from "@/todos/components/TodoGrid";
import prisma from "@/lib/prisma";

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });
  return (
    <div 
    // className="flex flex-col gap-5 justify-center items-center"
    >
      <NewTodo />
      <TodoGrid todos={todos} />
    </div>
  );
}
