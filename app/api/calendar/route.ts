import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { DateTime } from 'luxon';
import * as z from "zod"; 


export async function GET(request: Request) {
  const url = new URL(request.url);

  const doctorId = z.coerce.number().int().parse(url.searchParams.get("doctor_id"));
  let start: string | Date | null = z.nullable(z.iso.datetime({ offset: true })).parse(url.searchParams.get("start"))
  const end = z.nullable(z.iso.datetime({ offset: true })).parse(url.searchParams.get("end")) || DateTime.now().plus({month: 1}).toJSDate();

  if (!(start && (DateTime.fromISO(start) > DateTime.now().plus({minutes: 5})))) {
    start = DateTime.now().plus({minutes: 5}).toJSDate();
  }

  const appointments = await prisma.appointment.findMany({
    select: {
      id: true,
      start: true,
      end: true,
    },
    where: {
      doctorId: {
        equals: doctorId
      },
      start: {
        gte: start,
      },
      end: {
        lte: end,
      },
      patientId: {
        equals: null
      }
    },
    orderBy: {
      start: 'asc'
    }
  });

  return NextResponse.json({ appointments });
}
 