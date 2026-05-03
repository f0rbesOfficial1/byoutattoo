import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { CalendarIcon } from "lucide-react";

import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { cn } from "@/lib/utils";

function formatDate(date: Date | undefined) {
  if (!date) return "Pick a date";
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const meta = {
  title: "UI/DatePicker",
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(undefined);
    return (
      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              className={cn(
                "w-[260px] justify-start text-left font-normal",
                !date && "text-muted-foreground",
              )}
            >
              <CalendarIcon />
              {formatDate(date)}
            </Button>
          }
        />
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </PopoverContent>
      </Popover>
    );
  },
};

export const WithPresets: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(undefined);

    const setOffsetDays = (days: number) => {
      const next = new Date();
      next.setDate(next.getDate() + days);
      setDate(next);
    };

    return (
      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              className={cn(
                "w-[260px] justify-start text-left font-normal",
                !date && "text-muted-foreground",
              )}
            >
              <CalendarIcon />
              {formatDate(date)}
            </Button>
          }
        />
        <PopoverContent className="w-auto p-0" align="start">
          <div className="flex flex-col gap-2 border-b p-2">
            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setOffsetDays(0)}
              >
                Today
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setOffsetDays(1)}
              >
                Tomorrow
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setOffsetDays(7)}
              >
                In a week
              </Button>
            </div>
          </div>
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </PopoverContent>
      </Popover>
    );
  },
};
