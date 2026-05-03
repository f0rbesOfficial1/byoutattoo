import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as Recharts from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "./chart";

const meta: Meta<typeof ChartContainer> = {
  title: "UI/Chart",
  component: ChartContainer,
};

export default meta;
type Story = StoryObj<typeof ChartContainer>;

const monthlyData = [
  { month: "Jan", espresso: 186, latte: 80 },
  { month: "Feb", espresso: 305, latte: 200 },
  { month: "Mar", espresso: 237, latte: 120 },
  { month: "Apr", espresso: 273, latte: 190 },
  { month: "May", espresso: 209, latte: 130 },
  { month: "Jun", espresso: 314, latte: 240 },
];

const drinkConfig = {
  espresso: {
    label: "Espresso",
    color: "var(--chart-1)",
  },
  latte: {
    label: "Latte",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export const BarChart: Story = {
  render: () => (
    <ChartContainer config={drinkConfig} className="min-h-[240px] w-[480px]">
      <Recharts.BarChart data={monthlyData}>
        <Recharts.CartesianGrid vertical={false} />
        <Recharts.XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Recharts.Bar
          dataKey="espresso"
          fill="var(--color-espresso)"
          radius={4}
        />
        <Recharts.Bar
          dataKey="latte"
          fill="var(--color-latte)"
          radius={4}
        />
      </Recharts.BarChart>
    </ChartContainer>
  ),
};

export const LineChart: Story = {
  render: () => (
    <ChartContainer config={drinkConfig} className="min-h-[240px] w-[480px]">
      <Recharts.LineChart data={monthlyData}>
        <Recharts.CartesianGrid vertical={false} />
        <Recharts.XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Recharts.Line
          dataKey="espresso"
          type="monotone"
          stroke="var(--color-espresso)"
          strokeWidth={2}
          dot={false}
        />
        <Recharts.Line
          dataKey="latte"
          type="monotone"
          stroke="var(--color-latte)"
          strokeWidth={2}
          dot={false}
        />
      </Recharts.LineChart>
    </ChartContainer>
  ),
};

export const AreaChart: Story = {
  render: () => (
    <ChartContainer config={drinkConfig} className="min-h-[240px] w-[480px]">
      <Recharts.AreaChart data={monthlyData}>
        <Recharts.CartesianGrid vertical={false} />
        <Recharts.XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Recharts.Area
          dataKey="espresso"
          type="natural"
          fill="var(--color-espresso)"
          fillOpacity={0.4}
          stroke="var(--color-espresso)"
          stackId="a"
        />
        <Recharts.Area
          dataKey="latte"
          type="natural"
          fill="var(--color-latte)"
          fillOpacity={0.4}
          stroke="var(--color-latte)"
          stackId="a"
        />
      </Recharts.AreaChart>
    </ChartContainer>
  ),
};

const pieData = [
  { drink: "espresso", cups: 275, fill: "var(--color-espresso)" },
  { drink: "latte", cups: 200, fill: "var(--color-latte)" },
  { drink: "filter", cups: 187, fill: "var(--color-filter)" },
  { drink: "mocha", cups: 173, fill: "var(--color-mocha)" },
];

const pieConfig = {
  cups: { label: "Cups" },
  espresso: { label: "Espresso", color: "var(--chart-1)" },
  latte: { label: "Latte", color: "var(--chart-2)" },
  filter: { label: "Filter", color: "var(--chart-3)" },
  mocha: { label: "Mocha", color: "var(--chart-4)" },
} satisfies ChartConfig;

export const PieChart: Story = {
  render: () => (
    <ChartContainer
      config={pieConfig}
      className="mx-auto aspect-square max-h-[300px]"
    >
      <Recharts.PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel nameKey="drink" />}
        />
        <Recharts.Pie
          data={pieData}
          dataKey="cups"
          nameKey="drink"
          innerRadius={60}
          strokeWidth={5}
        />
        <ChartLegend content={<ChartLegendContent nameKey="drink" />} />
      </Recharts.PieChart>
    </ChartContainer>
  ),
};
