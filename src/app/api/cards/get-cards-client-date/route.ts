import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { date: clientDate } = await req.json();

    const url = `https://www.nytimes.com/svc/connections/v2/${clientDate}.json`;

    console.log("Date from client: " + clientDate);

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
