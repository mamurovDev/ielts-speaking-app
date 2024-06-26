import { NextResponse } from "next/server";
import connectMongodb from "@/libs/mongodb";
import Part1 from "@/models/part1";

export async function GET() {
  try {
    await connectMongodb();
    const partOneCount = await Part1.countDocuments();
    return NextResponse.json(
      { count: partOneCount},
      { headers: { "Cache-Control": "max-age=3600" } }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch questions" },
      { status: 500 }
    );
  }
}
