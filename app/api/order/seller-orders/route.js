import { NextResponse } from "next/server";
import connectDB from "@/config/db";
import Order from "@/models/Order";
import Address from "@/models/Address";
import { getAuth } from "@clerk/nextjs/server";
import authSeller from "@/lib/authSeller";

export async function GET(request) {
  try {
    const { userId } = getAuth(request);

    const isSeller = await authSeller(userId);

    if (!isSeller) {
      return NextResponse("Unauthorized", { status: 401 });
    }

    await connectDB();

    // Ensure Address is not undefined (this line seems unnecessary)
    Address.length;

    // Fetch orders and populate fields
    const orders = await Order.find({}).populate("address items.product");

    return NextResponse.json({ success: true, orders }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 502 }
    );
  }
}