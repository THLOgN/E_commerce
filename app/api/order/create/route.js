import { inngest } from "@/config/inngest";
import Product from "@/models/Product";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import User from "@/models/User";

export async function POST(request) {
  try {
    const { userId } = getAuth(request);
    const { address, items } = await request.json();
    if (!address || items.length === 0) {
      return NextResponse.json({
        success: false,
        message: "Invalid data",
        status: 400,
      });
    }
    //Calculate total amount
    const amount = await items.reduce(async (acc, item) => {
      const product = await Product.findById(item.product);
      return (await acc) + product.price * item.quantity;
    }, 0);
    //Create order
    await inngest.send({
      name: "order/created",
      data: {
        userId,
        address,
        items,
        amount: amount + Math.floor(amount * 0.02),
        date: Date.now(),
      },
    });
    //clear user cart
    const user = await User.findById(userId);
    user.cartItems = {};
    await user.save();

    //Notify user
    return NextResponse.json({
      success: true,
      message: "Order placed successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Error Order",
      status: 500,
    });
  }
}
