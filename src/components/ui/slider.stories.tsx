import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Label } from "./label";
import { Slider } from "./slider";

const meta: Meta<typeof Slider> = {
  title: "UI/Slider",
  component: Slider,
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => (
    <div className="w-72">
      <Slider defaultValue={[40]} max={100} step={1} />
    </div>
  ),
};

export const Range: Story = {
  render: () => (
    <div className="w-72 space-y-2">
      <Label>Price range</Label>
      <Slider defaultValue={[12, 28]} min={0} max={50} step={1} />
    </div>
  ),
};

export const WithSteps: Story = {
  render: () => (
    <div className="w-72 space-y-2">
      <Label>Sweetness</Label>
      <Slider defaultValue={[2]} min={0} max={4} step={1} />
      <p className="text-xs text-muted-foreground">
        0 = unsweetened, 4 = extra sweet
      </p>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-72">
      <Slider defaultValue={[60]} max={100} step={1} disabled />
    </div>
  ),
};
