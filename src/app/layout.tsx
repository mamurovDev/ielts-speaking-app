import { Inter } from "next/font/google";
import "./globals.css";

import { Inter as FontSans } from "next/font/google";
import StoreProvider from "./StorePrivider";
import { ThemeProvider } from "@/components";
import { Metadata } from "next";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  twitter: {
    card: "summary_large_image",
    title: "AceWise",
    description: "Your Ultimate IELTS Speaking Preparation Guide",
    images: [{ url: "/part1.png", alt: "AceWise logo" }],
    creator: "@mamurov_dev",
    creatorId: "1488086751285587970"
  },
}

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
          }>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider >
  );
}
