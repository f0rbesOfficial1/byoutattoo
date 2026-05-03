import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CalendarIcon } from "@phosphor-icons/react";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";

const meta: Meta<typeof HoverCard> = {
  title: "UI/HoverCard",
  component: HoverCard,
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger render={<Button variant="link">@perron</Button>} />
      <HoverCardContent>
        <div className="flex justify-between gap-3">
          <Avatar>
            <AvatarImage
              src="https://i.pravatar.cc/64?img=14"
              alt="Perron Coffee"
            />
            <AvatarFallback>PC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="font-heading text-sm font-medium">Perron Coffee</h4>
            <p className="text-sm">
              A neighborhood roastery serving slow-brewed coffee since 2019.
            </p>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <CalendarIcon className="mr-1 size-3" />
              <span>Open since June 2019</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const Sides: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <HoverCard key={side}>
          <HoverCardTrigger
            render={<Button variant="outline">{side}</Button>}
          />
          <HoverCardContent side={side}>
            <p className="text-sm">
              Hover card anchored to the <strong>{side}</strong>.
            </p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  ),
};
