import { NextResponse } from "next/server";
import connectDB from "@/config/db";
import Order from "@/models/Order";
import Address from "@/models/Address";
import Product from "@/models/Product";
import { getAuth } from "@clerk/nextjs/server";


export async function GET(request) {
    try {
        await connectDB();
        const { userId } = getAuth(request);

        Address.length;
        Product.length;

        const orders = await Order.find({ userId }).populate("items.product address");
        return NextResponse.json({ success: true, orders }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 501 });
    } 
}