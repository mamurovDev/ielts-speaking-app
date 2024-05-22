import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Inter as FontSans } from "next/font/google";
import RouteReminder from "@/components/RoteTracker";
import StoreProvider from "./StorePrivider";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body
          className={
            fontSans.variable +
            " flex items-center bg-black font-sans  text-white "
          }
        >
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
