import { NextResponse } from "next/server";
import Part2 from "@/models/part2";
export async function GET() {
  try {
    const part2 = await Part2.find().sort({ order: 1 });
    return NextResponse.json(part2, {
      headers: { "Cache-Control": "max-age=86400" },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch questions" },
      { status: 500 }
    );
  }
}
