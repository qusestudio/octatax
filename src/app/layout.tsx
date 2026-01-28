import type { Metadata } from "next";
import {Geist, Geist_Mono, Space_Grotesk} from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/components/elements/Header";
import Footer from "@/components/elements/Footer";
import WhatsAppButton from "@/components/elements/WhatsappButton";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceMono = Space_Grotesk({
    weight: "400",
    variable: "--font-space-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OCTA | Oxen Chartered Tax Advisors.",
  description: "Oxen Chartered Tax Advisors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        <title>OCTA | Oxen Chartered Tax Advisors</title>
        <meta name="google-site-verification" content="4OOkoOhyvv-1B1gGnhQqRxRwGuXocg8ag3XN4sBE3z8" />
    </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceMono.variable} font-space antialiased`}
      >
        <Analytics />
        <Header />
        <WhatsAppButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
