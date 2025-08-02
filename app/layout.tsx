// app/layout.tsx
import "./globals.css";
import Header from "./Header";
import Providers from "./providers";

import {NextIntlClientProvider} from 'next-intl';

export const metadata = {
  title: "LuxMedi",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider>
          <Providers>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
