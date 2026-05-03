import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  TextAlignCenter,
  TextAlignJustify,
  TextAlignLeft,
  TextAlignRight,
  TextB,
  TextItalic,
  TextUnderline,
} from "@phosphor-icons/react";

import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

const meta: Meta<typeof ToggleGroup> = {
  title: "UI/ToggleGroup",
  component: ToggleGroup,
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Single: Story = {
  render: () => (
    <ToggleGroup defaultValue={["left"]} aria-label="Text alignment">
      <ToggleGroupItem value="left" aria-label="Align left">
        <TextAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <TextAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <TextAlignRight />
      </ToggleGroupItem>
      <ToggleGroupItem value="justify" aria-label="Justify">
        <TextAlignJustify />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Multiple: Story = {
  render: () => (
    <ToggleGroup
      multiple
      defaultValue={["bold"]}
      aria-label="Text formatting"
    >
      <ToggleGroupItem value="bold" aria-label="Bold">
        <TextB />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        <TextItalic />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        <TextUnderline />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Outline: Story = {
  render: () => (
    <ToggleGroup variant="outline" defaultValue={["center"]}>
      <ToggleGroupItem value="left" aria-label="Align left">
        <TextAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <TextAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <TextAlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-3">
      <ToggleGroup size="sm" defaultValue={["left"]}>
        <ToggleGroupItem value="left" aria-label="Align left">
          <TextAlignLeft />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <TextAlignCenter />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <TextAlignRight />
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup defaultValue={["left"]}>
        <ToggleGroupItem value="left" aria-label="Align left">
          <TextAlignLeft />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <TextAlignCenter />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <TextAlignRight />
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup size="lg" defaultValue={["left"]}>
        <ToggleGroupItem value="left" aria-label="Align left">
          <TextAlignLeft />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <TextAlignCenter />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <TextAlignRight />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};
