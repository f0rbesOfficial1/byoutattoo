import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { AspectRatio } from "./aspect-ratio";

const meta: Meta<typeof AspectRatio> = {
  title: "UI/AspectRatio",
  component: AspectRatio,
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <AspectRatio
        ratio={16 / 9}
        className="overflow-hidden rounded-md bg-muted"
      >
        <div className="flex size-full items-center justify-center text-sm font-medium text-muted-foreground">
          16 : 9
        </div>
      </AspectRatio>
    </div>
  ),
};

export const Square: Story = {
  render: () => (
    <div className="w-full max-w-xs">
      <AspectRatio
        ratio={1}
        className="overflow-hidden rounded-md bg-primary/10"
      >
        <div className="flex size-full items-center justify-center text-sm font-medium text-primary">
          1 : 1
        </div>
      </AspectRatio>
    </div>
  ),
};

export const Portrait: Story = {
  render: () => (
    <div className="w-full max-w-xs">
      <AspectRatio
        ratio={3 / 4}
        className="overflow-hidden rounded-md bg-secondary/40"
      >
        <div className="flex size-full items-center justify-center text-sm font-medium text-foreground">
          3 : 4
        </div>
      </AspectRatio>
    </div>
  ),
};

export const Ultrawide: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <AspectRatio
        ratio={21 / 9}
        className="overflow-hidden rounded-md bg-muted"
      >
        <div className="flex size-full items-center justify-center text-sm font-medium text-muted-foreground">
          21 : 9
        </div>
      </AspectRatio>
    </div>
  ),
};
