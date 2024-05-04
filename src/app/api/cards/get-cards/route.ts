import { NextResponse } from "next/server";

export async function GET() {
  try {
    const date = new Date();
    const dateString = date.toISOString().split("T")[0];
    const url = `https://www.nytimes.com/svc/connections/v2/${dateString}.json`;

    // const url = `https://www.nytimes.com/svc/connections/v2/2024-04-01.json`;

    const response = await fetch(url);
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    // Error handling
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
