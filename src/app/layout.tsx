import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Leap - Discover How AI Can Help You",
  description:
    "A fun, interactive experience that helps you discover how AI can make your life easier. No jargon, no tech knowledge required.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
