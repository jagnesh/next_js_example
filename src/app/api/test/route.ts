import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({ message: "Response sent" }, { status: 200 });
};
