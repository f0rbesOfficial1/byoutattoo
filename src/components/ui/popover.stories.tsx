import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { GearIcon } from "@phosphor-icons/react";

import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "./popover";

const meta: Meta<typeof Popover> = {
  title: "UI/Popover",
  component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline">Open popover</Button>} />
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Today&apos;s special</PopoverTitle>
          <PopoverDescription>
            Caramel oat latte, brewed with single-origin beans from Ethiopia.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger
        render={
          <Button variant="outline" size="icon">
            <GearIcon />
          </Button>
        }
      />
      <PopoverContent className="w-80">
        <PopoverHeader>
          <PopoverTitle>Brew settings</PopoverTitle>
          <PopoverDescription>
            Tweak the dial-in for the next pour.
          </PopoverDescription>
        </PopoverHeader>
        <div className="grid gap-3">
          <div className="grid grid-cols-3 items-center gap-2">
            <Label htmlFor="dose">Dose (g)</Label>
            <Input id="dose" defaultValue="18" className="col-span-2 h-8" />
          </div>
          <div className="grid grid-cols-3 items-center gap-2">
            <Label htmlFor="yield">Yield (g)</Label>
            <Input id="yield" defaultValue="36" className="col-span-2 h-8" />
          </div>
          <div className="grid grid-cols-3 items-center gap-2">
            <Label htmlFor="time">Time (s)</Label>
            <Input id="time" defaultValue="28" className="col-span-2 h-8" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const Sides: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Popover key={side}>
          <PopoverTrigger
            render={<Button variant="outline">{side}</Button>}
          />
          <PopoverContent side={side}>
            <PopoverHeader>
              <PopoverTitle className="capitalize">{side} popover</PopoverTitle>
              <PopoverDescription>
                Anchored to the {side} of the trigger.
              </PopoverDescription>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  ),
};
