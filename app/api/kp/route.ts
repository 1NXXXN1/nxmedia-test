import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const path = req.nextUrl.searchParams.get("path");
  if (!path) {
    return NextResponse.json({ error: "path required" }, { status: 400 });
  }

  const res = await fetch(`${process.env.KP_API_BASE}${path}`, {
    headers: {
      "X-API-KEY": process.env.KP_API_KEY!,
      "Content-Type": "application/json"
    },
    cache: "no-store"
  });

  return NextResponse.json(await res.json());
}