import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { boolean, object, string } from "yup";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = Number(searchParams.get("take") ?? "10");
  const skip = Number(searchParams.get("skip") ?? "0");
  // const id = searchParams.get("id") ?? "";

  if (isNaN(take)) {
    return NextResponse.json(
      { message: "Take tiene que ser numero" },
      { status: 400 }
    );
  }
  if (isNaN(skip)) {
    return NextResponse.json(
      { message: "Skip tiene que ser numero" },
      { status: 400 }
    );
  }

  const todos = await prisma.todo.findMany({
    skip: skip,
    take: take,
    // where: {
    //   id: {
    //     contains: id,
    //   },
    // },
  });
  console.log(todos);
  return NextResponse.json(todos);
}

const todoSchema = object({
  description: string().required(),
  complete: boolean().required().default(false),
});

export async function POST(request: Request) {
  try {
    const { complete, description } = await todoSchema.validate(
      await request.json()
    );
    const todo = await prisma.todo.create({
      data: {
        complete,
        description,
      },
    });
    return NextResponse.json(todo);
  } catch (error) {
        NextResponse.json(error,{status:400})
  }
}
