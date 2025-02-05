import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextAuthProvider } from "@/components/Providers";
import ThemeProvider from "@/frontend/theme/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <ThemeProvider>
            <div className="lg:max-w-[900px] lg:px-16 mx-auto py-8 shadow-xl flex flex-col px-8">
              <Navbar />
              <div className="flex-auto">{children}</div>
              <Footer />
            </div>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
