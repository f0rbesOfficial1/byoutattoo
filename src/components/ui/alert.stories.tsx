import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CoffeeIcon, AlertTriangleIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "./alert";

const meta: Meta<typeof Alert> = {
  title: "UI/Alert",
  component: Alert,
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: () => (
    <Alert className="max-w-md">
      <CoffeeIcon />
      <AlertTitle>New seasonal blend in the grinder</AlertTitle>
      <AlertDescription>
        Try the Costa Rica Tarrazú, available all this week.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="max-w-md">
      <AlertTriangleIcon />
      <AlertTitle>Reservation could not be saved</AlertTitle>
      <AlertDescription>
        Please check your details and try again.
      </AlertDescription>
    </Alert>
  ),
};

export const TitleOnly: Story = {
  render: () => (
    <Alert className="max-w-md">
      <AlertTitle>Closed today for a private event.</AlertTitle>
    </Alert>
  ),
};
