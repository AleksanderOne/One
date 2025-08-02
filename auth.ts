import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { Session, User } from "next-auth";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import * as z from "zod"; 

declare module "next-auth" {
  interface User {
    role: string,
    id: number|string,
  }
}


export const { auth, handlers, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        login: { label: "Login", type: "login" },
        name: { label: "Name", type: "name" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        let login: string, name: string|undefined, password: string;
        try {
          ({login, password, name} = z.object(
            {
              login: z.union([z.email(), z.e164()]),
              name: z.string().min(6).max(128).optional(),
              password: z.string().min(6).max(128),
            }
          ).parse(credentials));
        } catch(error: any) {
          throw new Error(error.issues);
        }

        let patient = await prisma.patient.findFirst({
          where: {
            OR: [
              {phone: login},
              {whatsapp: login},
              {email: login},
            ]
          }
        });
        if (patient) {
          if (await bcrypt.compare(
            password,
            patient.password || ''
          )) {
            return {
              name: patient.name,
              id: patient.id,
              role: 'patient'}
          } else {
            throw new Error("Invalid credentials");
          }
        }

        const doctor = await prisma.doctor.findFirst({
          where: {
            OR: [
              {phone: login},
              {whatsapp: login},
              {email: login},
            ]
          }
        })
        if (doctor) {
          if (await bcrypt.compare(
            password,
            doctor.password || ''
          )) {
            return {
              name: doctor.name,
              id: doctor.id,
              role: 'doctor'
            }
          } else {
            throw new Error("Invalid credentials");
          }
        }

        const user = await prisma.user.findFirst({
          where: {
            OR: [
              {email: login},
            ]
          }
        })

        if (user) {
          if (await bcrypt.compare(
            password,
            user.password || ''
          )) {
            return {
              name: user.name,
              id: user.id,
              role: user.role,
            }
          } else {
            throw new Error("Invalid credentials");
          }
        }
        if (name) {
          const _patient = await prisma.patient.create({
            data: {
              name,
              whatsapp: login,
              password: await bcrypt.hash(password, 10),
            },
          });
          return {
            name: _patient.name,
            id: _patient.id,
            role: 'patient',
          }; 
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log('jwt', { token, user })
      return {
        ...token,
        id: token.id ?? user?.id,
        role: token.role ?? user?.role,
      };
    },
    async session({ session, token }) {
      console.log({session, token })
      if (token)
        return { ...session, user: { ...session.user, id: Number(token.id), role: String(token?.role)}};
      else
        return session;
    },
  },
});
