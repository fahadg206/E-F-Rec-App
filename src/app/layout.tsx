import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Providers from "./components/Theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#EDEDED] dark:bg-[#000000] text-[#1a1a1c] dark:text-[#EDEDED]">
        <Providers>
          <div>
            <Navbar />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}