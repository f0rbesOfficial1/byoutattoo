import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "./button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Input } from "./input";
import { Label } from "./label";

const meta: Meta<typeof Dialog> = {
  title: "UI/Dialog",
  component: Dialog,
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Reservation: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button>Reserve a table</Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reserve a table</DialogTitle>
          <DialogDescription>
            We will confirm your reservation by email within the hour.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3">
          <div className="grid gap-1.5">
            <Label htmlFor="r-name">Name</Label>
            <Input id="r-name" placeholder="Anna De Smet" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="r-email">Email</Label>
            <Input
              id="r-email"
              type="email"
              placeholder="hello@perron.coffee"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="ghost">Cancel</Button>} />
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
