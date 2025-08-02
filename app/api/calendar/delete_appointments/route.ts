import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { DateTime } from 'luxon';

import * as z from "zod"; 


export async function POST(request: Request) {
  let ids;
  
  try {
    ids = z.array(z.coerce.number().int().gt(0)).parse(await request.json());
  } catch (error: any) {
    return NextResponse.json(error.issues, {status: 400});
  }

  const deleted = await prisma.appointment.deleteMany({where: {
    id: {
      in: ids
    },
    start: {
      gt: DateTime.now().toJSDate()
    }
  }});

  return NextResponse.json({ deleted });
}
