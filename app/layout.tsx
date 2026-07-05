import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cooltips.kr"),
  title: {
    default: "CoolTips",
    template: "%s | CoolTips",
  },
  description:
    "CoolTips shares practical AI, developer, and productivity tips for people who want to work smarter.",
  keywords: [
    "AI tips",
    "developer tips",
    "productivity tools",
    "workflow tips",
    "CoolTips",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CoolTips",
    description:
      "Practical AI, developer, and productivity tips for smarter work.",
    url: "https://cooltips.kr",
    siteName: "CoolTips",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "CoolTips",
    description:
      "Practical AI, developer, and productivity tips for smarter work.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
