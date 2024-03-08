import { NextRequest, NextResponse } from "next/server";
import connectMongodb from "../../../libs/mongodb";
import Part1 from "../../../models/part1";

export async function POST(request: any) {
  const { vocabulary, questions, answers, author } = await request.json();
  try {
    await connectMongodb();
    await Part1.create({ vocabulary, questions, answers, author });
    return NextResponse.json(
      { message: "A question added successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function GET() {
  await connectMongodb();
  const part1 = await Part1.find();
  return NextResponse.json({ part1 });
}

export async function DELETE(request: NextRequest) {
  const _id = request.nextUrl.searchParams.get("id");
  await connectMongodb();
  await Part1.findByIdAndDelete(_id);
  return NextResponse.json(
    { message: "Successfully deleted" },
    { status: 200 }
  );
}

export async function PUT(
  request: any,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { vocabulary, questions, answers, author } = await request.json();
  await connectMongodb();
  await Part1.findByIdAndDelete(id, { vocabulary, questions, answers, author });
  return NextResponse.json(
    { message: "Successfully updated" },
    { status: 200 }
  );
}
