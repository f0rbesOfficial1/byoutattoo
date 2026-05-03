import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Checkbox } from "./checkbox";
import { Input } from "./input";
import { Label } from "./label";

const meta: Meta<typeof Label> = {
  title: "UI/Label",
  component: Label,
};

export default meta;
type Story = StoryObj<typeof Label>;

export const WithInput: Story = {
  render: () => (
    <div className="grid w-full max-w-xs gap-1.5">
      <Label htmlFor="name">Full name</Label>
      <Input id="name" placeholder="Anna De Smet" />
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Email me weekly bean updates</Label>
    </div>
  ),
};
