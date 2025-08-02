// import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
// import { DateTime } from 'luxon';
// import { getServerSession } from "next-auth/next"
// import { authOptions } from "@/auth"
import * as z from "zod"; 
// import { equal } from "assert";


export async function POST(request: Request) {
  // const session = await getServerSession(authOptions);
  let appointmentId: number;

  try {
    ({appointmentId} = z.object({
      appointmentId: z.coerce.number().int().gt(0)
    }).parse(await request.json()));
  } catch (error: any) {
    return NextResponse.json(error.issues, {status: 400});
  }
  console.log(appointmentId);
  // const reserved = await prisma.appointment.update({where: {
  //   id: appointmentId,
  //   start: {
  //     gt: DateTime.now().plus({minutes: 5}).toJSDate()
  //   },
  //   patientId: {
  //     equals: null,
  //   }
  // },
  // data: {
  //   reservation: DateTime.now().plus({minutes: 15}).toJSDate(),
  //   // start: DateTime.now().plus({minutes: 15}).toJSDate(), 
  // }
  // });

  return NextResponse.json({ 1:1 });
}
