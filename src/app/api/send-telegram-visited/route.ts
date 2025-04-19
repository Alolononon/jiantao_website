// src/app/api/send-telegram/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_USER_ID;
  const message = "Someone just visited your website!";

  const res = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    }
  );

  if (!res.ok) {
    return NextResponse.json({ success: false, error: await res.text() });
  }

  return NextResponse.json({ success: true });
}
