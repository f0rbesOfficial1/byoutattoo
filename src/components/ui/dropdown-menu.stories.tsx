import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import {
  CreditCard,
  SignOut,
  Plus,
  Gear,
  User,
} from "@phosphor-icons/react";

import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./dropdown-menu";

const meta: Meta<typeof DropdownMenu> = {
  title: "UI/DropdownMenu",
  component: DropdownMenu,
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="outline">Open menu</Button>}
      />
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User />
            Profile
            <DropdownMenuShortcut>P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard />
            Billing
            <DropdownMenuShortcut>B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Gear />
            Settings
            <DropdownMenuShortcut>,</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <SignOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithCheckbox: Story = {
  render: () => {
    function CheckboxMenu() {
      const [showOats, setShowOats] = useState(true);
      const [showSyrup, setShowSyrup] = useState(false);
      const [showWhip, setShowWhip] = useState(false);
      return (
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button variant="outline">Modifiers</Button>}
          />
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Add-ons</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={showOats}
              onCheckedChange={setShowOats}
            >
              Oat milk
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showSyrup}
              onCheckedChange={setShowSyrup}
            >
              Vanilla syrup
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showWhip}
              onCheckedChange={setShowWhip}
            >
              Whipped cream
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
    return <CheckboxMenu />;
  },
};

export const WithRadioGroup: Story = {
  render: () => {
    function RadioMenu() {
      const [size, setSize] = useState("medium");
      return (
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button variant="outline">Cup size</Button>}
          />
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Pick a size</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={size} onValueChange={setSize}>
              <DropdownMenuRadioItem value="small">Small</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="medium">
                Medium
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="large">Large</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
    return <RadioMenu />;
  },
};

export const WithSubmenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="outline">More options</Button>}
      />
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Order actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Plus />
          New order
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Change milk</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Whole</DropdownMenuItem>
            <DropdownMenuItem>Oat</DropdownMenuItem>
            <DropdownMenuItem>Almond</DropdownMenuItem>
            <DropdownMenuItem>Soy</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Cancel order</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
