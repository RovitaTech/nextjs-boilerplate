import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RovitaTech | Software Studio",
  description: "A premium company website for RovitaTech, focused on product experiences, software craftsmanship, and clear business value.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={manrope.className}>
        {children}
      </body>
    </html>
  );
}
