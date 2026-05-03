import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Separator } from "./separator";

const meta: Meta<typeof Separator> = {
  title: "UI/Separator",
  component: Separator,
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => (
    <div className="max-w-sm space-y-2">
      <div className="text-sm font-medium">Espresso menu</div>
      <Separator />
      <div className="text-sm text-muted-foreground">
        Updated daily based on what is in the grinder.
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-8 items-center gap-3 text-sm">
      <span>Open today</span>
      <Separator orientation="vertical" />
      <span>7:30 to 18:00</span>
      <Separator orientation="vertical" />
      <span>Antwerp</span>
    </div>
  ),
};
