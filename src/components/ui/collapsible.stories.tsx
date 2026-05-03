import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CaretDownIcon } from "@phosphor-icons/react";

import { Button } from "./button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";

const meta: Meta<typeof Collapsible> = {
  title: "UI/Collapsible",
  component: Collapsible,
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: () => (
    <Collapsible className="w-full max-w-md space-y-2">
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-sm font-semibold">Today's specials</h4>
        <CollapsibleTrigger
          render={
            <Button variant="ghost" size="sm">
              Show more
              <CaretDownIcon className="size-4" />
            </Button>
          }
        />
      </div>
      <div className="rounded-md border px-4 py-3 text-sm">
        Single origin Ethiopian, hand brewed.
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 text-sm">
          Cardamom bun, baked this morning.
        </div>
        <div className="rounded-md border px-4 py-3 text-sm">
          Iced matcha with oat milk.
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const WithLongContent: Story = {
  render: () => (
    <Collapsible className="w-full max-w-md space-y-2">
      <CollapsibleTrigger
        render={
          <Button variant="outline" size="sm" className="w-full justify-between">
            Read our sourcing story
            <CaretDownIcon className="size-4" />
          </Button>
        }
      />
      <CollapsibleContent>
        <div className="rounded-md border p-4 text-sm leading-relaxed text-muted-foreground">
          Every bag we serve is traceable to a single farm. We visit each
          producer at least once a year, taste through harvests together, and
          pay above the Fair Trade premium so growers can keep investing in
          quality. The result lives in your cup: clarity, sweetness, and a
          sense of place.
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};
