import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  CalendarIcon,
  CoffeeIcon,
  HouseIcon,
  TrayIcon,
  LifebuoyIcon,
  MagnifyingGlassIcon,
  PaperPlaneTiltIcon,
  GearIcon,
  UsersIcon,
} from "@phosphor-icons/react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "./sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "UI/Sidebar",
  component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const mainNav = [
  { title: "Home", url: "#", icon: HouseIcon },
  { title: "Inbox", url: "#", icon: TrayIcon },
  { title: "Calendar", url: "#", icon: CalendarIcon },
  { title: "Search", url: "#", icon: MagnifyingGlassIcon },
  { title: "Settings", url: "#", icon: GearIcon },
];

const teamNav = [
  { title: "Baristas", url: "#", icon: UsersIcon },
  { title: "Menu", url: "#", icon: CoffeeIcon },
];

const supportNav = [
  { title: "Support", url: "#", icon: LifebuoyIcon },
  { title: "Feedback", url: "#", icon: PaperPlaneTiltIcon },
];

export const Default: Story = {
  render: () => (
    <div className="h-[600px] w-full">
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2 py-1.5">
              <div className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <CoffeeIcon className="size-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-sm font-medium">
                  Perron
                </span>
                <span className="text-xs text-muted-foreground">
                  Coffee studio
                </span>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Workspace</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {mainNav.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        render={
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        }
                      />
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Team</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {teamNav.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        render={
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        }
                      />
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              {supportNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    render={
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    }
                  />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="flex h-14 items-center gap-2 border-b px-4">
            <SidebarTrigger />
            <span className="font-heading text-sm font-medium">Dashboard</span>
          </header>
          <div className="flex-1 p-6">
            <p className="text-sm text-muted-foreground">
              Sidebar content area. Use the trigger or press Cmd/Ctrl + B.
            </p>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  ),
};

export const Floating: Story = {
  render: () => (
    <div className="h-[600px] w-full">
      <SidebarProvider>
        <Sidebar variant="floating" collapsible="icon">
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2 py-1.5">
              <div className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <CoffeeIcon className="size-4" />
              </div>
              <span className="font-heading text-sm font-medium group-data-[collapsible=icon]:hidden">
                Perron
              </span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Workspace</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {mainNav.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        tooltip={item.title}
                        render={
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        }
                      />
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <header className="flex h-14 items-center gap-2 px-4">
            <SidebarTrigger />
            <span className="font-heading text-sm font-medium">Floating</span>
          </header>
        </SidebarInset>
      </SidebarProvider>
    </div>
  ),
};
