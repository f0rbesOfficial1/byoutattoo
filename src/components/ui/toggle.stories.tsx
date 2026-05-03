import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TextB, TextItalic, Star, TextUnderline } from "@phosphor-icons/react";

import { Toggle } from "./toggle";

const meta: Meta<typeof Toggle> = {
  title: "UI/Toggle",
  component: Toggle,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
  },
  args: {
    children: "Toggle",
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {};

export const Outline: Story = {
  args: { variant: "outline" },
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Toggle aria-label="Toggle bold">
        <TextB />
      </Toggle>
      <Toggle aria-label="Toggle italic" defaultPressed>
        <TextItalic />
      </Toggle>
      <Toggle aria-label="Toggle underline">
        <TextUnderline />
      </Toggle>
    </div>
  ),
};

export const WithIconAndText: Story = {
  render: () => (
    <Toggle variant="outline">
      <Star />
      Favorite
    </Toggle>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Toggle size="sm">Small</Toggle>
      <Toggle>Default</Toggle>
      <Toggle size="lg">Large</Toggle>
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true, children: "Disabled" },
};
