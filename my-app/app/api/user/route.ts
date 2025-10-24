import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  return NextResponse.json({
    email: "nayans808@gmail.com",
    name: "nayan",
  });
}
export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);
  return NextResponse.json({
    message: "you are signed up",
  });
}
