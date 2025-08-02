import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { DateTime } from 'luxon';

import * as z from "zod"; 


export async function POST(request: Request) {
  let parsed;
  
  try {
    parsed = z.object({
      doctorId: z.coerce.number().int().gt(0),
      minutes: z.coerce.number().int().gte(1).lte(100),
      count: z.coerce.number().int().gte(1).lte(100).default(1),
      start: z.iso.datetime({ offset: true }),
    }).refine(data => DateTime.fromISO(data.start) >= DateTime.now(),
      {path: ['start'], error: 'Appointments cannot be created in past'}
    ).parse(await request.json());
  } catch (error: any) {
    return NextResponse.json(error.issues, {status: 400});
  }

  const {doctorId, minutes, count, start} = parsed; 

  const appointments: any[] = [];
  for (let i = 0; i < count; ++i) {
    appointments.push({
      doctorId,
      start: DateTime.fromISO(start).plus({minutes: minutes * i}).toJSDate(),
      end: DateTime.fromISO(start).plus({minutes: minutes * (i + 1)}).toJSDate(),
    })
  }

  const created = await prisma.appointment.createManyAndReturn({data: appointments});

  return NextResponse.json({ created });
}
