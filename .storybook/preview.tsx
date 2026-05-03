import type { Preview } from "@storybook/nextjs-vite";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import React from "react";

import { TooltipProvider } from "../src/components/ui/tooltip";
import "../src/app/globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} font-sans bg-background text-foreground min-h-screen p-10`}
      >
        <TooltipProvider>
          <Story />
        </TooltipProvider>
      </div>
    ),
  ],
};

export default preview;
