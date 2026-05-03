import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "./progress";

const meta: Meta<typeof Progress> = {
  title: "UI/Progress",
  component: Progress,
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <Progress value={60} />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-80">
      <Progress value={75}>
        <ProgressLabel>Roast progress</ProgressLabel>
        <ProgressValue />
      </Progress>
    </div>
  ),
};

export const Indeterminate: Story = {
  render: () => (
    <div className="w-80">
      <Progress value={null}>
        <ProgressLabel>Brewing…</ProgressLabel>
      </Progress>
    </div>
  ),
};

export const Animated: Story = {
  render: function AnimatedProgress() {
    const [value, setValue] = React.useState(10);

    React.useEffect(() => {
      const id = window.setInterval(() => {
        setValue((v) => (v >= 100 ? 0 : v + 5));
      }, 400);
      return () => window.clearInterval(id);
    }, []);

    return (
      <div className="w-80">
        <Progress value={value}>
          <ProgressLabel>Pour over</ProgressLabel>
          <ProgressValue />
        </Progress>
      </div>
    );
  },
};
