import type { Metadata } from "next";
import { Sora } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const nonchalance = localFont({
  src: [
    {
      path: "./fonts/Nonchalance-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Nonchalance-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Nonchalance-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nonchalance",
});

export const metadata: Metadata = {
  title: "N Natural Hair Salon",
  description: "Natural Hair Stylist Careers",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${nonchalance.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}