import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "./button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Single origin espresso</CardTitle>
        <CardDescription>Ethiopia, Yirgacheffe</CardDescription>
      </CardHeader>
      <CardContent>
        Bright, floral, with notes of bergamot and stone fruit. Pulled as a
        traditional double shot.
      </CardContent>
      <CardFooter>
        <Button>Add to order</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Reservation confirmed</CardTitle>
        <CardDescription>Saturday, May 4 at 10:30</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">
            Edit
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        Table for two on the terrace. We will hold the table for 15 minutes
        past your reservation time.
      </CardContent>
    </Card>
  ),
};

export const Small: Story = {
  render: () => (
    <Card size="sm" className="max-w-sm">
      <CardHeader>
        <CardTitle>Opening hours</CardTitle>
      </CardHeader>
      <CardContent>Mon to Fri, 7:30 to 18:00</CardContent>
    </Card>
  ),
};
