import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

const meta: Meta<typeof Accordion> = {
  title: "UI/Accordion",
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Single: Story = {
  render: () => (
    <Accordion className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Do you take reservations?</AccordionTrigger>
        <AccordionContent>
          Yes, for groups of three or more. Smaller parties are welcome to
          walk in.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Are you dog friendly?</AccordionTrigger>
        <AccordionContent>
          Always. Water bowls and treats are at the bar.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Do you sell beans to take home?</AccordionTrigger>
        <AccordionContent>
          We rotate two house roasts and one guest, packaged daily.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion multiple className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Allergens</AccordionTrigger>
        <AccordionContent>
          We use oat, almond, and soy. Cross contamination is possible.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Wifi</AccordionTrigger>
        <AccordionContent>
          Free, ask any barista for the password.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
