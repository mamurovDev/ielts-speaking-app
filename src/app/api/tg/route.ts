import { NextRequest, NextResponse } from "next/server";
import connectMongodb from "@/libs/mongodb";
import TelegramChannel from "@/models/telegramChannels";

export async function GET() {
  try {
    await connectMongodb();
    const telegramChannels = await TelegramChannel.find();

    return NextResponse.json(
      { telegramChannels },
      { headers: { "Cache-Control": "no-cache" } }
    );
  } catch (error) {
    console.error("Error fetching Telegram channels: ", error);
    return NextResponse.json(
      { message: "Failed to fetch telegram channels" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    
    await connectMongodb(); 
    const { name, username, img, bio } = await request.json();
    if (!name || !username || !img) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }
    const newChannel = new TelegramChannel({
      name: name.trim(),
      username: username.trim(),
      img: img.trim(),
      bio: bio.trim(),
    });

    await newChannel.save();

    return NextResponse.json(
      { message: "Channel added successfully" },
      { headers: { "Cache-Control": "no-cache" } }
    );
  } catch (error) {
    console.error("Error adding new telegram channel: ", error);
    return NextResponse.json(
      { message: "Failed to add new telegram channel" },
      { status: 500 }
    );
  }
}
