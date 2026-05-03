import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TextBIcon,
  TextItalicIcon,
  TextUnderlineIcon,
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
        <TextBIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="Italic">
        <TextItalicIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="Underline">
        <TextUnderlineIcon />
      </Button>
    </ButtonGroup>
  ),
};

export const WithSeparator: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="icon" aria-label="Align left">
        <TextAlignLeftIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="Align center">
        <TextAlignCenterIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="Align right">
        <TextAlignRightIcon />
      </Button>
      <ButtonGroupSeparator />
      <Button variant="outline" size="icon" aria-label="Bold">
        <TextBIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="Italic">
        <TextItalicIcon />
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
