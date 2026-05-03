import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tray, Plus, MagnifyingGlass } from "@phosphor-icons/react";

import { Button } from "./button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./empty";

const meta: Meta<typeof Empty> = {
  title: "UI/Empty",
  component: Empty,
};

export default meta;
type Story = StoryObj<typeof Empty>;

export const Default: Story = {
  render: () => (
    <Empty className="max-w-md border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Tray />
        </EmptyMedia>
        <EmptyTitle>No orders yet</EmptyTitle>
        <EmptyDescription>
          When customers place an order it will appear here. Try sending the
          menu to your regulars.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>
          <Plus />
          Create order
        </Button>
      </EmptyContent>
    </Empty>
  ),
};

export const Compact: Story = {
  render: () => (
    <Empty className="max-w-sm border p-4">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <MagnifyingGlass />
        </EmptyMedia>
        <EmptyTitle>No matches</EmptyTitle>
        <EmptyDescription>
          Try a different search term or clear the filters.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
};

export const WithLink: Story = {
  render: () => (
    <Empty className="max-w-md border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Tray />
        </EmptyMedia>
        <EmptyTitle>Inbox is clear</EmptyTitle>
        <EmptyDescription>
          You are caught up. Read the{" "}
          <a href="#">getting started guide</a> to learn what to do next.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">View archive</Button>
      </EmptyContent>
    </Empty>
  ),
};
