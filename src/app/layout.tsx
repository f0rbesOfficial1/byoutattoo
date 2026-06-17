import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  DM_Serif_Display,
  Geist_Mono,
  Inter,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import { Cursor } from "@/components/cursor";
import { IconProvider } from "@/components/icon-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

// High-contrast display serif used for all titles.
const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "B. You Tattoo — Fine-line & floral blackwork",
  description:
    "B. You Tattoo — fijne, elegante zwart-wit tattoos met oog voor detail door Brenda. Fineline, bloemenmotieven, mandala's en dotwork. Uitsluitend op afspraak in Lede.",
  icons: {
    icon: "/Logo.png",
    apple: "/Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} ${geistMono.variable} ${cormorant.variable} ${dmSerif.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <IconProvider>
          <main className="flex-1">{children}</main>
        </IconProvider>
        <Cursor />
        <Analytics />
      </body>
    </html>
  );
}
