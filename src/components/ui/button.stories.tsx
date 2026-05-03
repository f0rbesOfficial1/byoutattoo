import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Coffee } from "@phosphor-icons/react";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "outline",
        "secondary",
        "ghost",
        "destructive",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "default", "lg", "icon"],
    },
  },
  args: {
    children: "Order coffee",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Secondary: Story = {
  args: { variant: "secondary" },
};

export const Outline: Story = {
  args: { variant: "outline" },
};

export const Ghost: Story = {
  args: { variant: "ghost" },
};

export const Destructive: Story = {
  args: { variant: "destructive", children: "Cancel order" },
};

export const Link: Story = {
  args: { variant: "link", children: "View menu" },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button size="xs">XS</Button>
      <Button size="sm">SM</Button>
      <Button>Default</Button>
      <Button size="lg">LG</Button>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Button>
      <Coffee />
      Order coffee
    </Button>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};
