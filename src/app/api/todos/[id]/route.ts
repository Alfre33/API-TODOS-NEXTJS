import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { NextResponse } from "next/server";
import { boolean, object, string } from "yup";

interface argsUrl {
  params: {
    id: string;
  };
}

const getTodo = async (id: string): Promise<Todo | null> => {
  const todo = await prisma.todo.findFirst({ where: { id } });

  return todo;
};

export async function GET(request: Request, { params }: argsUrl) {
  const data = await getTodo(params.id);

  if (!data) {
    return NextResponse.json({ data });
  } else {
    return NextResponse.json(
      { message: `todo con id ${params.id}  no existe` },
      { status: 404 }
    );
  }
}

const updateSchema = object({
  description: string().optional(),
  complete: boolean().optional(),
});

export async function PUT(request: Request, { params }: argsUrl) {
  const todo = await getTodo(params.id);
  if (!todo) {
    return NextResponse.json(
      { message: `Todo con id ${params.id} no exite` },
      { status: 404 }
    );
  }
  try {
    const { complete, description } = await updateSchema.validate(
      await request.json()
    );

    const todoUpdate = await prisma.todo.update({
      where: {
        id: params.id,
      },
      data: {
        complete,
        description,
      },
    });
    return NextResponse.json(todoUpdate);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
