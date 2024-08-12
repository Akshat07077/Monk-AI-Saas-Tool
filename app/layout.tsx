import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MonkAi.io",
  description: "Ai Content Creator for 30+ Templates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <ClerkProvider>
      <html lang="en">
      <link rel="icon" href="/logo.png" sizes="1280" />
      <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
