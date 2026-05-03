import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CoffeeIcon, LeafIcon, SparklesIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";

const meta: Meta<typeof NavigationMenu> = {
  title: "UI/NavigationMenu",
  component: NavigationMenu,
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Drinks</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[420px] gap-2 p-3 md:grid-cols-2">
              <li>
                <NavigationMenuLink href="#">
                  <CoffeeIcon />
                  <div>
                    <div className="font-medium">Espresso bar</div>
                    <p className="text-xs text-muted-foreground">
                      Single & double shots, cortados, lattes.
                    </p>
                  </div>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">
                  <LeafIcon />
                  <div>
                    <div className="font-medium">Slow brews</div>
                    <p className="text-xs text-muted-foreground">
                      Pour-over, AeroPress, batch brew.
                    </p>
                  </div>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">
                  <SparklesIcon />
                  <div>
                    <div className="font-medium">Seasonal</div>
                    <p className="text-xs text-muted-foreground">
                      Limited drinks rotating each month.
                    </p>
                  </div>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">
                  <CoffeeIcon />
                  <div>
                    <div className="font-medium">Non-coffee</div>
                    <p className="text-xs text-muted-foreground">
                      Matcha, hot chocolate, herbal teas.
                    </p>
                  </div>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Beans</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[280px] gap-2 p-3">
              <li>
                <NavigationMenuLink href="#">
                  <div>
                    <div className="font-medium">Ethiopia Yirgacheffe</div>
                    <p className="text-xs text-muted-foreground">
                      Floral, citrus, jasmine.
                    </p>
                  </div>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">
                  <div>
                    <div className="font-medium">Colombia Huila</div>
                    <p className="text-xs text-muted-foreground">
                      Caramel, almond, brown sugar.
                    </p>
                  </div>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">
                  <div>
                    <div className="font-medium">Brazil Cerrado</div>
                    <p className="text-xs text-muted-foreground">
                      Chocolate, hazelnut, smooth.
                    </p>
                  </div>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className={navigationMenuTriggerStyle()}
          >
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export const SimpleLinks: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className={navigationMenuTriggerStyle()}
          >
            Menu
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className={navigationMenuTriggerStyle()}
          >
            Shop
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className={navigationMenuTriggerStyle()}
          >
            Visit
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className={navigationMenuTriggerStyle()}
          >
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
