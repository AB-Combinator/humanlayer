import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HumanLayer — The Human Infrastructure Platform",
  description:
    "AI-powered HR agents that handle the full employee lifecycle — from candidate screening to compassionate offboarding — without adding a single person to your org chart.",
  openGraph: {
    title: "HumanLayer — The Human Infrastructure Platform",
    description:
      "AI-powered HR agents that handle the full employee lifecycle — from candidate screening to compassionate offboarding.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HumanLayer — The Human Infrastructure Platform",
    description:
      "AI-powered HR agents that handle the full employee lifecycle.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
