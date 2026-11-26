import * as React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "PROOF DISTILLING CO. — Small-batch spirits with character",
  description:
    "Premium spirits crafted from locally sourced grains, aged in hand-selected barrels, and bottled with care.",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geist.variable} min-h-screen bg-[#1A1411] text-[#E8E2D6] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
