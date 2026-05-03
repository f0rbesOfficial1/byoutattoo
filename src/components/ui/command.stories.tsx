import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useEffect, useState } from "react";
import {
  CalendarIcon,
  CoffeeIcon,
  CreditCardIcon,
  GearIcon,
  SmileyIcon,
  UserIcon,
} from "@phosphor-icons/react";

import { Button } from "./button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./command";

const meta: Meta<typeof Command> = {
  title: "UI/Command",
  component: Command,
};

export default meta;
type Story = StoryObj<typeof Command>;

export const Default: Story = {
  render: () => (
    <Command className="w-80 rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <CalendarIcon />
            Calendar
          </CommandItem>
          <CommandItem>
            <SmileyIcon />
            Search emoji
          </CommandItem>
          <CommandItem>
            <CoffeeIcon />
            Order coffee
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <UserIcon />
            Profile
            <CommandShortcut>{"⌘P"}</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCardIcon />
            Billing
            <CommandShortcut>{"⌘B"}</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <GearIcon />
            Settings
            <CommandShortcut>{"⌘S"}</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const AsDialog: Story = {
  render: () => {
    function CommandPalette() {
      const [open, setOpen] = useState(false);

      useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
          if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
            event.preventDefault();
            setOpen((prev) => !prev);
          }
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
      }, []);

      return (
        <>
          <p className="text-sm text-muted-foreground">
            Press{" "}
            <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-xs">
              {"⌘"}
            </kbd>
            {" "}+{" "}
            <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-xs">
              K
            </kbd>{" "}
            or use the button below.
          </p>
          <div className="mt-3">
            <Button variant="outline" onClick={() => setOpen(true)}>
              Open command palette
            </Button>
          </div>
          <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Quick actions">
                <CommandItem onSelect={() => setOpen(false)}>
                  <CoffeeIcon />
                  Start a new order
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  <CalendarIcon />
                  View today&apos;s reservations
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Account">
                <CommandItem onSelect={() => setOpen(false)}>
                  <UserIcon />
                  Profile
                  <CommandShortcut>{"⌘P"}</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  <GearIcon />
                  Settings
                  <CommandShortcut>{"⌘,"}</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </CommandDialog>
        </>
      );
    }
    return <CommandPalette />;
  },
};
