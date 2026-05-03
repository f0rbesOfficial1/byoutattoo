import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Kbd, KbdGroup } from "./kbd";

const meta: Meta<typeof Kbd> = {
  title: "UI/Kbd",
  component: Kbd,
};

export default meta;
type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  render: () => <Kbd>K</Kbd>,
};

export const Combo: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>Cmd</Kbd>
      <span className="text-muted-foreground">+</span>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
};

export const InText: Story = {
  render: () => (
    <p className="text-sm text-muted-foreground">
      Press{" "}
      <KbdGroup>
        <Kbd>Cmd</Kbd>
        <Kbd>S</Kbd>
      </KbdGroup>{" "}
      to save your order.
    </p>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Search</span>
        <KbdGroup>
          <Kbd>Cmd</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">New order</span>
        <KbdGroup>
          <Kbd>Cmd</Kbd>
          <Kbd>Shift</Kbd>
          <Kbd>N</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Close</span>
        <Kbd>Esc</Kbd>
      </div>
    </div>
  ),
};
