import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

import * as z from "zod"; 


export async function POST(request: Request) {
  let login: string;
  try {
    login = z.object(
      {login: z.union([z.email(), z.e164()])}
    ).parse(
      await request.json()
    ).login;
  } catch (error: any) {
    return NextResponse.json(error.issues, {status: 400});
  }
  let user: any = await prisma.patient.findFirst({
    where: {
      OR: [
        {phone: login},
        {whatsapp: login},
        {email: login},
      ]
    }
  });
  if (!user) {
    user = await prisma.doctor.findFirst({
      where: {
        OR: [
          {phone: login},
          {whatsapp: login},
          {email: login},
        ]
      }
    }) || await prisma.user.findFirst({
      where: {
        OR: [
          {email: login},
        ]
      }
    })
  }

  // TODO: create otp sender

  return NextResponse.json({
    login: user ? 'registered': 'available',
    auth: user?.password ? 'password' : 'otp',
  });
}
