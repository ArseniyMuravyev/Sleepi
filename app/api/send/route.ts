import { EmailTemplate } from "@/components/contacts/EmailTemplate";
import { Resend } from "resend";
import { ReactElement } from "react";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { email } = await req.json();
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }) as ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data, email });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
