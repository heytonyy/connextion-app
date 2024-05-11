import { getDb } from "@/app/config/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // connect to database
    const db = await getDb();
    // const collection = db.collection("leaderboard");

    return NextResponse.json({ message: "okay" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
