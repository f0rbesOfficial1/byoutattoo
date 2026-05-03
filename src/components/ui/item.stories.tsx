import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  CaretRightIcon,
  CoffeeIcon,
  BreadIcon,
  LeafIcon,
} from "@phosphor-icons/react";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Badge } from "./badge";
import { Button } from "./button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "./item";

const meta: Meta<typeof Item> = {
  title: "UI/Item",
  component: Item,
};

export default meta;
type Story = StoryObj<typeof Item>;

export const Default: Story = {
  render: () => (
    <Item className="max-w-md">
      <ItemContent>
        <ItemTitle>Cortado</ItemTitle>
        <ItemDescription>
          Two ristretto shots cut with steamed milk.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm">Order</Button>
      </ItemActions>
    </Item>
  ),
};

export const WithMedia: Story = {
  render: () => (
    <Item variant="outline" className="max-w-md">
      <ItemMedia variant="icon">
        <CoffeeIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Espresso tonic</ItemTitle>
        <ItemDescription>
          A double shot of espresso poured over tonic and ice.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="ghost" size="icon-sm">
          <CaretRightIcon />
        </Button>
      </ItemActions>
    </Item>
  ),
};

export const WithAvatar: Story = {
  render: () => (
    <Item variant="outline" className="max-w-md">
      <ItemMedia>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="Anna" />
          <AvatarFallback>AD</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Anna De Smet</ItemTitle>
        <ItemDescription>Head barista, weekday mornings.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Badge variant="secondary">Online</Badge>
      </ItemActions>
    </Item>
  ),
};

export const Group: Story = {
  render: () => (
    <ItemGroup className="max-w-md">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <CoffeeIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Single origin filter</ItemTitle>
          <ItemDescription>Bright, floral, hand brewed to order.</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item variant="outline">
        <ItemMedia variant="icon">
          <BreadIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Almond croissant</ItemTitle>
          <ItemDescription>Baked in house every morning at six.</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item variant="outline">
        <ItemMedia variant="icon">
          <LeafIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Matcha latte</ItemTitle>
          <ItemDescription>Ceremonial grade with oat milk.</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
};
