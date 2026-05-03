import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Label } from "./label";
import { Textarea } from "./textarea";

const meta: Meta<typeof Textarea> = {
  title: "UI/Textarea",
  component: Textarea,
  args: {
    placeholder: "Any notes for the barista",
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: (args) => <Textarea {...args} className="max-w-md" />,
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-md gap-1.5">
      <Label htmlFor="notes">Special requests</Label>
      <Textarea
        id="notes"
        placeholder="Allergies, seating preferences, etc."
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Textarea disabled placeholder="Disabled" className="max-w-md" />
  ),
};
