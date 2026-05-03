import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ScrollArea, ScrollBar } from "./scroll-area";
import { Separator } from "./separator";

const meta: Meta<typeof ScrollArea> = {
  title: "UI/ScrollArea",
  component: ScrollArea,
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

const tags = Array.from({ length: 50 }).map(
  (_, i) => `Single origin batch v1.2.0-${(i + 1).toString().padStart(3, "0")}`,
);

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-72 w-64 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

const works = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  title: `Roast ${i + 1}`,
}));

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 rounded-md border whitespace-nowrap">
      <div className="flex w-max gap-4 p-4">
        {works.map((work) => (
          <figure key={work.id} className="shrink-0">
            <div className="flex h-32 w-32 items-center justify-center rounded-md bg-muted text-sm text-muted-foreground">
              {work.title}
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Roast batch {work.id + 1}
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

export const LongText: Story = {
  render: () => (
    <ScrollArea className="h-48 w-80 rounded-md border p-4 text-sm">
      <p>
        Perron started as a single cart on platform two of the old Antwerp
        station. We pulled shots between train arrivals, learning that good
        coffee is mostly a question of patience and timing.
      </p>
      <p className="mt-2">
        Today we work with three farms in Ethiopia, two in Colombia, and a
        rotating fourth that changes every quarter. Every bag is roasted the
        morning of the day it ships.
      </p>
      <p className="mt-2">
        If you stop by the cafe, ask for the cupping notes. We keep a
        clipboard behind the bar with tasting impressions from the crew, and
        you are welcome to add your own.
      </p>
      <p className="mt-2">
        On weekends we run a slow brew bar at the back. Reservations are not
        required but they help us pace the morning.
      </p>
    </ScrollArea>
  ),
};
