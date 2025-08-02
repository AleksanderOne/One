import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { DateTime } from 'luxon';

const prisma = new PrismaClient();

async function main() {
  const users = await Promise.all([
    prisma.doctor.create({
      data: {
        email: 'alice@example.com',
        name: 'dr Alice',
        phone: '+48123456789',
        whatsapp: '+48123456789',
        password: await bcrypt.hash('password123', 10),
      },
    }),
    prisma.doctor.create({
      data: {
        email: 'bob@example.com',
        name: 'dr Bob',
        phone: '+48987654321',
        whatsapp: '+48987456321',
        password: await bcrypt.hash('password123', 10),
      },
    }),
  ]);

  for(let i: number = 0; i < 30; ++i) {
    await prisma.appointment.create({
      data: {
        doctorId: 2,
        start: DateTime.fromISO("2025-07-18T08:00:00-04:00").plus({minutes: 12*(i)}).toJSDate(),
        end: DateTime.fromISO("2025-07-18T08:00:00-04:00").plus({minutes: 12*(i+1)}).toJSDate(),
      }
    })
  }

  
  console.log('Seeding completed.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
