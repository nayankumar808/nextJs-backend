import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export function GET(req: NextRequest) {
  return NextResponse.json({
    email: "nayans808@gmail.com",
    name: "nayan",
  });
}
export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    const user = await prisma.user.create({
      data: {
        username: body.username,
        password: body.password,
      },
    });
    return NextResponse.json({
      message: "you are signed up",
    });
  } catch (e) {
    return NextResponse.json(
      {
        message: "Error while sigining up",
      },
      {
        status: 501,
      }
    );
  }
}
