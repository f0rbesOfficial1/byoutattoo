import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { toast } from "sonner";

import { Button } from "./button";
import { Toaster } from "./sonner";

const meta: Meta<typeof Toaster> = {
  title: "UI/Sonner",
  component: Toaster,
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => (
    <div>
      <Button
        variant="outline"
        onClick={() =>
          toast.success("Order placed", {
            description: "Your cortado will be ready in 3 minutes.",
          })
        }
      >
        Show toast
      </Button>
      <Toaster />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => toast("Standard message")}>
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.success("Order placed")}
      >
        Success
      </Button>
      <Button variant="outline" onClick={() => toast.info("Open from 7am")}>
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.warning("Low on oat milk")}
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.error("Card declined")}
      >
        Error
      </Button>
      <Toaster />
    </div>
  ),
};

export const WithAction: Story = {
  render: () => (
    <div>
      <Button
        variant="outline"
        onClick={() =>
          toast("Order sent to bar", {
            description: "Latte, oat milk, no sugar.",
            action: {
              label: "Undo",
              onClick: () => toast.info("Order cancelled"),
            },
          })
        }
      >
        Show toast with action
      </Button>
      <Toaster />
    </div>
  ),
};

export const Promise: Story = {
  render: () => (
    <div>
      <Button
        variant="outline"
        onClick={() => {
          const brew = new window.Promise<{ name: string }>((resolve) => {
            window.setTimeout(() => resolve({ name: "espresso" }), 1500);
          });
          toast.promise(brew, {
            loading: "Pulling shot…",
            success: (data) => `${data.name} is ready`,
            error: "Grinder jammed",
          });
        }}
      >
        Show promise toast
      </Button>
      <Toaster />
    </div>
  ),
};
