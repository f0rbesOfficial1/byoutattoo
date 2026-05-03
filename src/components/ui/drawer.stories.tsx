import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";

import { Button } from "./button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";

const meta: Meta<typeof Drawer> = {
  title: "UI/Drawer",
  component: Drawer,
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Today&apos;s pour</DrawerTitle>
            <DrawerDescription>
              A bright Ethiopia Yirgacheffe with notes of jasmine and citrus.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0 text-sm text-muted-foreground">
            Brewed slowly through a Hario V60 with a 1:16 ratio.
          </div>
          <DrawerFooter>
            <Button>Add to order</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};

export const WithNestedActions: Story = {
  render: () => {
    function QuantityDrawer() {
      const [count, setCount] = useState(2);
      return (
        <Drawer>
          <DrawerTrigger asChild>
            <Button>Adjust quantity</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>How many cups?</DrawerTitle>
                <DrawerDescription>
                  Set the number of caramel oat lattes for your order.
                </DrawerDescription>
              </DrawerHeader>
              <div className="flex items-center justify-center gap-6 p-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCount((c) => Math.max(1, c - 1))}
                  disabled={count <= 1}
                >
                  <MinusIcon />
                </Button>
                <div className="font-heading text-3xl font-medium tabular-nums">
                  {count}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCount((c) => c + 1)}
                >
                  <PlusIcon />
                </Button>
              </div>
              <DrawerFooter>
                <Button>Confirm</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      );
    }
    return <QuantityDrawer />;
  },
};
