import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/navbar";

const optFont = Montserrat({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Hosted Project List 2",
  description: "Anurag Wankhede",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={optFont.className}>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
