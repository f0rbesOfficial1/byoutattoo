import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Label } from "./label";
import { RadioGroup, RadioGroupItem } from "./radio-group";

const meta: Meta<typeof RadioGroup> = {
  title: "UI/RadioGroup",
  component: RadioGroup,
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="oat" className="max-w-xs">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="whole" id="milk-whole" />
        <Label htmlFor="milk-whole">Whole milk</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="oat" id="milk-oat" />
        <Label htmlFor="milk-oat">Oat milk</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="almond" id="milk-almond" />
        <Label htmlFor="milk-almond">Almond milk</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="soy" id="milk-soy" />
        <Label htmlFor="milk-soy">Soy milk</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <RadioGroup defaultValue="medium" className="max-w-sm gap-4">
      <div className="flex items-start gap-2">
        <RadioGroupItem value="light" id="roast-light" className="mt-0.5" />
        <div className="grid gap-0.5">
          <Label htmlFor="roast-light">Light roast</Label>
          <p className="text-sm text-muted-foreground">
            Bright and fruit-forward, great for pour over.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <RadioGroupItem value="medium" id="roast-medium" className="mt-0.5" />
        <div className="grid gap-0.5">
          <Label htmlFor="roast-medium">Medium roast</Label>
          <p className="text-sm text-muted-foreground">
            Balanced sweetness, our house favorite.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <RadioGroupItem value="dark" id="roast-dark" className="mt-0.5" />
        <div className="grid gap-0.5">
          <Label htmlFor="roast-dark">Dark roast</Label>
          <p className="text-sm text-muted-foreground">
            Bold and chocolatey, made for espresso.
          </p>
        </div>
      </div>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="pickup" disabled className="max-w-xs">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="pickup" id="d-pickup" />
        <Label htmlFor="d-pickup">Pickup</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="delivery" id="d-delivery" />
        <Label htmlFor="d-delivery">Delivery</Label>
      </div>
    </RadioGroup>
  ),
};
