import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const filePath = path.join(process.cwd(), "contact-data.csv");

    const row = `"${data.name}","${data.phone}","${data.altPhone}","${data.email}","${data.message}","${new Date().toISOString()}"\n`;

    if (!fs.existsSync(filePath)) {
      const headers = "Name,Phone,Alternate Phone,Email,Message,Date\n";
      fs.writeFileSync(filePath, headers + row);
    } else {
      fs.appendFileSync(filePath, row);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
