import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Luterana Biguaçu",
  description: "Culto todos os domingos 19:30",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 overflow-x-hidden`}>
        <div className="flex flex-col min-h-screen">
          <div className="bg-noise"></div>
          <NavBar />
          <main className="flex-1">{children}</main>
        </div>
      </body>

    </html>
  );
}
