import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // In production, implement proper token generation logic
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  // Mock token generation
  const token = Buffer.from(JSON.stringify({ query, timestamp: Date.now() })).toString("base64");

  return NextResponse.json({
    token,
    expiresIn: 3600,
  });
}
