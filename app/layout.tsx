import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/global.scss";
import MobileNavigation from "./_components/Navigation/MobileNavigation";
import DesktopNavigation from "./_components/Navigation/DesktopNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wagner Laser Cleaning",
  description: "Safely cleaning rusteed metals, and ect. Turn old into new.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MobileNavigation />
        <DesktopNavigation />
        {children}
      </body>
    </html>
  );
}
