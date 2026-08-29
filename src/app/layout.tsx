import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";

import { BrandGradient } from "@/components/icons";
import { SiteFooter, SiteHeader } from "@/components/layout";
import { siteUrl } from "@/data";
import { pageMetadata } from "@/lib/metadata";

import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const homeTitle = "Photosnap | Create and share your photo stories";
const description =
  "Photosnap is a platform for photographers and visual storytellers. Share photos, tell stories and connect with others.";

export const metadata: Metadata = {
  ...pageMetadata({
    title: homeTitle,
    shareTitle: homeTitle,
    description,
    path: "/",
  }),
  metadataBase: new URL(siteUrl),
  title: { default: homeTitle, template: "%s | Photosnap" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col font-sans">
        <BrandGradient />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
