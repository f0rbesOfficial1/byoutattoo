import type { Preview } from "@storybook/nextjs-vite";
import {
  Cormorant_Garamond,
  Geist_Mono,
  Inter,
  Playfair_Display,
} from "next/font/google";
import React from "react";

import { IconProvider } from "../src/components/icon-provider";
import { TooltipProvider } from "../src/components/ui/tooltip";
import "../src/app/globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
const playfair = Playfair_Display({
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "charcoal",
      values: [
        { name: "charcoal", value: "hsl(0 0% 9%)" },
        { name: "card", value: "hsl(0 0% 11%)" },
        { name: "muted", value: "hsl(0 0% 15%)" },
        { name: "white", value: "#ffffff" },
      ],
    },
    a11y: {
      test: "todo",
    },
  },
  decorators: [
    (Story) => (
      <div
        className={`${inter.variable} ${geistMono.variable} ${cormorant.variable} ${playfair.variable} font-sans bg-background text-foreground min-h-screen p-10`}
      >
        <IconProvider>
          <TooltipProvider>
            <Story />
          </TooltipProvider>
        </IconProvider>
      </div>
    ),
  ],
};

export default preview;
