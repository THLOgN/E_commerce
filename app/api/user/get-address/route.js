import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import connectDB from "@/config/db";
import Address from "@/models/Address";

export async function GET(request) {
  try {
    const { userId } = getAuth(request);

    await connectDB();

    const addresses = await Address.find({ userId });

    return NextResponse.json({ success: true, addresses, status: 200 });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message:" Failed to find addresses",
      status: 500,
    });
  }
}
