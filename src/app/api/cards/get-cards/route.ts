import { NextResponse } from "next/server";

export async function GET() {
  try {
    const date = new Date();
    date.setDate(date.getDate() + 1); // Add 1 day to the current date
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const dateString = `${year}-${month}-${day}`;

    const url = `https://www.nytimes.com/svc/connections/v2/${dateString}.json`;

    // April Fools Day Emoji Connection:
    // const url = `https://www.nytimes.com/svc/connections/v2/2024-04-01.json`;

    console.log("Date from server: " + dateString);

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
