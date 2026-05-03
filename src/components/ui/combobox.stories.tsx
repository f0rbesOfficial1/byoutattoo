import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
} from "./combobox";

const meta: Meta<typeof Combobox> = {
  title: "UI/Combobox",
  component: Combobox,
};

export default meta;
type Story = StoryObj<typeof Combobox>;

type Framework = { value: string; label: string };

const frameworks: Framework[] = [
  { value: "next", label: "Next.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "nuxt", label: "Nuxt" },
  { value: "sveltekit", label: "SvelteKit" },
];

function FrameworkPicker() {
  const [value, setValue] = useState<Framework | null>(null);
  return (
    <div className="w-64">
      <Combobox<Framework>
        items={frameworks}
        itemToStringValue={(item) => item.value}
        itemToStringLabel={(item) => item.label}
        value={value}
        onValueChange={setValue}
      >
        <ComboboxInput placeholder="Pick a framework..." />
        <ComboboxContent>
          <ComboboxList>
            {(item: Framework) => (
              <ComboboxItem key={item.value} value={item}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
          <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

export const Default: Story = {
  render: () => <FrameworkPicker />,
};

type Bean = { value: string; label: string; region: string };

const beans: Bean[] = [
  { value: "ethiopia", label: "Ethiopia Yirgacheffe", region: "Africa" },
  { value: "kenya", label: "Kenya Nyeri", region: "Africa" },
  { value: "colombia", label: "Colombia Huila", region: "Americas" },
  { value: "guatemala", label: "Guatemala Antigua", region: "Americas" },
  { value: "sumatra", label: "Sumatra Mandheling", region: "Asia" },
];

function BeanPicker() {
  const [value, setValue] = useState<Bean | null>(null);
  return (
    <div className="w-72">
      <Combobox<Bean>
        items={beans}
        itemToStringValue={(item) => item.value}
        itemToStringLabel={(item) => item.label}
        value={value}
        onValueChange={setValue}
      >
        <ComboboxInput placeholder="Search beans..." showClear />
        <ComboboxContent>
          <ComboboxList>
            {(item: Bean) => (
              <ComboboxItem key={item.value} value={item}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
          <ComboboxEmpty>No beans match your search.</ComboboxEmpty>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

export const WithSearch: Story = {
  render: () => <BeanPicker />,
};

function GroupedPicker() {
  const [value, setValue] = useState<Bean | null>(beans[0]);
  return (
    <div className="w-72">
      <Combobox<Bean>
        items={beans}
        itemToStringValue={(item) => item.value}
        itemToStringLabel={(item) => item.label}
        value={value}
        onValueChange={setValue}
      >
        <ComboboxInput placeholder="Pick a bean..." />
        <ComboboxContent>
          <ComboboxList>
            <ComboboxGroup>
              <ComboboxLabel>Africa</ComboboxLabel>
              {beans
                .filter((b) => b.region === "Africa")
                .map((item) => (
                  <ComboboxItem key={item.value} value={item}>
                    {item.label}
                  </ComboboxItem>
                ))}
            </ComboboxGroup>
            <ComboboxSeparator />
            <ComboboxGroup>
              <ComboboxLabel>Americas</ComboboxLabel>
              {beans
                .filter((b) => b.region === "Americas")
                .map((item) => (
                  <ComboboxItem key={item.value} value={item}>
                    {item.label}
                  </ComboboxItem>
                ))}
            </ComboboxGroup>
            <ComboboxSeparator />
            <ComboboxGroup>
              <ComboboxLabel>Asia</ComboboxLabel>
              {beans
                .filter((b) => b.region === "Asia")
                .map((item) => (
                  <ComboboxItem key={item.value} value={item}>
                    {item.label}
                  </ComboboxItem>
                ))}
            </ComboboxGroup>
          </ComboboxList>
          <ComboboxEmpty>No beans found.</ComboboxEmpty>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

export const Grouped: Story = {
  render: () => <GroupedPicker />,
};
