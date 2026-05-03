import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Label } from "./label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

const meta: Meta<typeof Select> = {
  title: "UI/Select",
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Pick a brew method" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="espresso">Espresso</SelectItem>
        <SelectItem value="v60">V60</SelectItem>
        <SelectItem value="chemex">Chemex</SelectItem>
        <SelectItem value="aeropress">AeroPress</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-56 gap-1.5">
      <Label htmlFor="party">Party size</Label>
      <Select defaultValue="2">
        <SelectTrigger id="party" className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">1 person</SelectItem>
          <SelectItem value="2">2 people</SelectItem>
          <SelectItem value="3">3 people</SelectItem>
          <SelectItem value="4">4 people</SelectItem>
          <SelectItem value="5">5 people</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};
