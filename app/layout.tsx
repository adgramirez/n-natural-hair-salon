import type { Metadata } from "next";
import { Sora } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const nonchalance = localFont({
  src: "../public/fonts/Nonchalance-Regular.otf",
  variable: "--font-nonchalance",
});

export const metadata: Metadata = {
  title: "N Natural Hair Salon",
  description: "Natural Hair Stylist Careers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.variable}>
        {children}
      </body>
    </html>
  );
}