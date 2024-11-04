import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {

    await prisma.todo.deleteMany();

    const todos = await prisma.todo.createMany({
        data:[
            {complete: true,description:'Nueva tarea'},
            {complete: true,description:'Nueva tarea'},
            {complete: false,description:'Nueva tarea'},
            {complete: true,description:'Nueva tarea'},
            {complete: false,description:'Nueva tarea'},
            {complete: true,description:'Nueva tarea'},
        ]
    })
//   const todo = await prisma.todo.create({
//     data: { description: 'tomar curso',complete: true }
//   });
//   console.log(todo);

  return NextResponse.json({ message: "seed executed" });
}
