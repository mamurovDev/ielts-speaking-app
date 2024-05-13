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
    return NextResponse.json(
      { message: "Failed to add question" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectMongodb();
    const part1 = await Part1.find().sort({ createdAt: -1 }); // Assuming there's a createdAt field

    return NextResponse.json(
      { part1 },
      { headers: { "Cache-Control": "no-cache" } }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch questions" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const _id = request.nextUrl.searchParams.get("id");
  try {
    await connectMongodb();
    await Part1.findByIdAndDelete(_id);
    return NextResponse.json(
      { message: "Successfully deleted" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to delete question" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: any,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { vocabulary, questions, answers, author } = await request.json();
  try {
    await connectMongodb();
    await Part1.findByIdAndUpdate(id, {
      vocabulary,
      questions,
      answers,
      author,
    });
    return NextResponse.json(
      { message: "Successfully updated" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to update question" },
      { status: 500 }
    );
  }
}
