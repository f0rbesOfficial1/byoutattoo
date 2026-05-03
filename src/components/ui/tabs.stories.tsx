import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

const meta: Meta<typeof Tabs> = {
  title: "UI/Tabs",
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="espresso" className="max-w-md">
      <TabsList>
        <TabsTrigger value="espresso">Espresso</TabsTrigger>
        <TabsTrigger value="filter">Filter</TabsTrigger>
        <TabsTrigger value="other">Other</TabsTrigger>
      </TabsList>
      <TabsContent value="espresso">
        Pulled to order, served short or long.
      </TabsContent>
      <TabsContent value="filter">
        Hand brewed V60 and Chemex, single origin only.
      </TabsContent>
      <TabsContent value="other">
        Matcha, hot chocolate, and seasonal specials.
      </TabsContent>
    </Tabs>
  ),
};

export const LineVariant: Story = {
  render: () => (
    <Tabs defaultValue="menu" className="max-w-md">
      <TabsList variant="line">
        <TabsTrigger value="menu">Menu</TabsTrigger>
        <TabsTrigger value="hours">Hours</TabsTrigger>
        <TabsTrigger value="contact">Contact</TabsTrigger>
      </TabsList>
      <TabsContent value="menu">Today's menu, updated each morning.</TabsContent>
      <TabsContent value="hours">Mon to Fri, 7:30 to 18:00.</TabsContent>
      <TabsContent value="contact">Email hello@perron.coffee.</TabsContent>
    </Tabs>
  ),
};
