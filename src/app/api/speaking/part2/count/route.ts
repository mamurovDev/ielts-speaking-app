import { NextResponse } from "next/server";
import connectMongodb from "@/libs/mongodb";
import Part2 from "@/models/part2";
export async function GET() {
  try {
    await connectMongodb();
    const partTwoCount = await Part2.countDocuments();
    return NextResponse.json({
      count: partTwoCount,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch questions" },
      { status: 500 }
    );
  }
}
