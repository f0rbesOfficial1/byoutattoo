import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  TextAlignCenter,
  TextAlignLeft,
  TextAlignRight,
  TextB,
  TextItalic,
  TextUnderline,
} from "@phosphor-icons/react";

import { Button } from "./button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "./button-group";
import { Input } from "./input";

const meta: Meta<typeof ButtonGroup> = {
  title: "UI/ButtonGroup",
  component: ButtonGroup,
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Espresso</Button>
      <Button variant="outline">Cortado</Button>
      <Button variant="outline">Latte</Button>
    </ButtonGroup>
  ),
};

export const Icons: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="icon" aria-label="Bold">
        <TextB />
      </Button>
      <Button variant="outline" size="icon" aria-label="Italic">
        <TextItalic />
      </Button>
      <Button variant="outline" size="icon" aria-label="Underline">
        <TextUnderline />
      </Button>
    </ButtonGroup>
  ),
};

export const WithSeparator: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="icon" aria-label="Align left">
        <TextAlignLeft />
      </Button>
      <Button variant="outline" size="icon" aria-label="Align center">
        <TextAlignCenter />
      </Button>
      <Button variant="outline" size="icon" aria-label="Align right">
        <TextAlignRight />
      </Button>
      <ButtonGroupSeparator />
      <Button variant="outline" size="icon" aria-label="Bold">
        <TextB />
      </Button>
      <Button variant="outline" size="icon" aria-label="Italic">
        <TextItalic />
      </Button>
    </ButtonGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="outline">Single</Button>
      <Button variant="outline">Double</Button>
      <Button variant="outline">Triple</Button>
    </ButtonGroup>
  ),
};

export const WithText: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupText>https://</ButtonGroupText>
      <Input placeholder="perron.coffee" />
      <Button variant="outline">Copy</Button>
    </ButtonGroup>
  ),
};
