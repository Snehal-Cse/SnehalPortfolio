import ConnectToDb from "@/app/database/db";
import Home from "@/app/models/home";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await ConnectToDb();
    const extractData = await Home.find({});
    if (extractData) {
      return NextResponse.json({
        success: true,
        message: "Data fetched successfully",
        data: extractData 
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Data cannot be fetched"
      });
    }
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: "Data cannot be fetched",
      error: e.message 
    });
  }
}
