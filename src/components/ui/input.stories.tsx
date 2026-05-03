import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Input } from "./input";
import { Label } from "./label";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  args: {
    placeholder: "Your name",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => <Input {...args} className="max-w-xs" />,
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-xs gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="hello@perron.coffee" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Input disabled placeholder="Disabled" className="max-w-xs" />
  ),
};

export const Invalid: Story = {
  render: () => (
    <div className="grid w-full max-w-xs gap-1.5">
      <Label htmlFor="email-bad">Email</Label>
      <Input
        id="email-bad"
        type="email"
        defaultValue="not-an-email"
        aria-invalid
      />
    </div>
  ),
};
