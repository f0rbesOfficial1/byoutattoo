import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Label } from "./label";
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "./native-select";

const meta: Meta<typeof NativeSelect> = {
  title: "UI/NativeSelect",
  component: NativeSelect,
};

export default meta;
type Story = StoryObj<typeof NativeSelect>;

export const Default: Story = {
  render: () => (
    <NativeSelect defaultValue="v60" className="w-56">
      <NativeSelectOption value="espresso">Espresso</NativeSelectOption>
      <NativeSelectOption value="v60">V60</NativeSelectOption>
      <NativeSelectOption value="chemex">Chemex</NativeSelectOption>
      <NativeSelectOption value="aeropress">AeroPress</NativeSelectOption>
    </NativeSelect>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-56 gap-1.5">
      <Label htmlFor="brew">Brew method</Label>
      <NativeSelect id="brew" className="w-full" defaultValue="v60">
        <NativeSelectOption value="espresso">Espresso</NativeSelectOption>
        <NativeSelectOption value="v60">V60</NativeSelectOption>
        <NativeSelectOption value="chemex">Chemex</NativeSelectOption>
      </NativeSelect>
    </div>
  ),
};

export const Small: Story = {
  render: () => (
    <NativeSelect size="sm" defaultValue="single" className="w-40">
      <NativeSelectOption value="single">Single</NativeSelectOption>
      <NativeSelectOption value="double">Double</NativeSelectOption>
      <NativeSelectOption value="triple">Triple</NativeSelectOption>
    </NativeSelect>
  ),
};

export const WithOptGroup: Story = {
  render: () => (
    <NativeSelect defaultValue="ethiopia" className="w-56">
      <NativeSelectOptGroup label="Africa">
        <NativeSelectOption value="ethiopia">Ethiopia</NativeSelectOption>
        <NativeSelectOption value="kenya">Kenya</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="South America">
        <NativeSelectOption value="colombia">Colombia</NativeSelectOption>
        <NativeSelectOption value="brazil">Brazil</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  ),
};

export const Disabled: Story = {
  render: () => (
    <NativeSelect disabled defaultValue="v60" className="w-56">
      <NativeSelectOption value="v60">V60</NativeSelectOption>
      <NativeSelectOption value="chemex">Chemex</NativeSelectOption>
    </NativeSelect>
  ),
};
