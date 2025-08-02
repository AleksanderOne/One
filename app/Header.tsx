"use client";

import Link from "next/link";
import { useSession, signOut } from 'next-auth/react';
import { setUserLocale } from "@/i18n/locale";

export default function Header() {
  const {data: session} = useSession();

  return (
    <header className="w-full bg-white shadow-md py-4 px-8">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
          CI works
        </Link>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition" onClick={() => setUserLocale('pt')}>pt</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition" onClick={() => setUserLocale('en')}>en</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition" onClick={() => setUserLocale('es')}>es</button>
          {session ? (
            <>
              <Link 
                href="/posts/new" 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                New Post
              </Link>
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-500">
                  {session.user?.name && <div>{session.user.name}</div>}
                  <div>{session?.user?.role || ''}</div>
                </div>
                <button
                  onClick={() => signOut()}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Sign Out
                </button>
              </div>
            </>
          ) : (
            <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
