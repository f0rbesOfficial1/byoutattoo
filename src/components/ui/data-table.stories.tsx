import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { ArrowDown, ArrowUp, Tray } from "@phosphor-icons/react";

import { Badge } from "./badge";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./empty";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

const meta = {
  title: "UI/DataTable",
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

type Order = {
  id: string;
  customer: string;
  status: "paid" | "pending" | "refunded";
  total: number;
};

const orders: Order[] = [
  { id: "INV001", customer: "Anna De Smet", status: "paid", total: 12.5 },
  { id: "INV002", customer: "Jonas Peeters", status: "pending", total: 8.0 },
  { id: "INV003", customer: "Maya Janssens", status: "paid", total: 21.75 },
  { id: "INV004", customer: "Lukas Maes", status: "refunded", total: 5.5 },
  { id: "INV005", customer: "Sofie Claes", status: "paid", total: 14.0 },
];

const statusVariant: Record<Order["status"], "default" | "secondary" | "outline"> = {
  paid: "default",
  pending: "secondary",
  refunded: "outline",
};

export const Default: Story = {
  render: () => {
    const total = orders.reduce((sum, order) => sum + order.total, 0);
    return (
      <div className="w-full max-w-3xl rounded-lg border">
        <Table>
          <TableCaption>Recent in store orders.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px]">Invoice</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>
                  <Badge variant={statusVariant[order.status]}>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right tabular-nums">
                  €{order.total.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right tabular-nums">
                €{total.toFixed(2)}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    );
  },
};

export const WithSorting: Story = {
  render: () => {
    const [direction, setDirection] = React.useState<"asc" | "desc">("desc");
    const sorted = React.useMemo(
      () =>
        [...orders].sort((a, b) =>
          direction === "asc" ? a.total - b.total : b.total - a.total,
        ),
      [direction],
    );
    return (
      <div className="w-full max-w-3xl rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px]">Invoice</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">
                <Button
                  variant="ghost"
                  size="sm"
                  className="-mr-2 ml-auto"
                  onClick={() =>
                    setDirection((d) => (d === "asc" ? "desc" : "asc"))
                  }
                >
                  Total
                  {direction === "asc" ? (
                    <ArrowUp />
                  ) : (
                    <ArrowDown />
                  )}
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sorted.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>
                  <Badge variant={statusVariant[order.status]}>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right tabular-nums">
                  €{order.total.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  },
};

export const WithSelection: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<Set<string>>(
      new Set([orders[1].id]),
    );

    const allSelected = selected.size === orders.length;
    const toggleAll = () => {
      setSelected(allSelected ? new Set() : new Set(orders.map((o) => o.id)));
    };
    const toggleRow = (id: string) => {
      setSelected((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });
    };

    return (
      <div className="w-full max-w-3xl space-y-2">
        <div className="text-sm text-muted-foreground">
          {selected.size} of {orders.length} selected
        </div>
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-10">
                  <Checkbox
                    checked={allSelected}
                    onCheckedChange={toggleAll}
                    aria-label="Select all"
                  />
                </TableHead>
                <TableHead className="w-[120px]">Invoice</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => {
                const isSelected = selected.has(order.id);
                return (
                  <TableRow
                    key={order.id}
                    data-state={isSelected ? "selected" : undefined}
                  >
                    <TableCell>
                      <Checkbox
                        checked={isSelected}
                        onCheckedChange={() => toggleRow(order.id)}
                        aria-label={`Select ${order.id}`}
                      />
                    </TableCell>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>
                      <Badge variant={statusVariant[order.status]}>
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right tabular-nums">
                      €{order.total.toFixed(2)}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  },
};

export const EmptyState: Story = {
  render: () => (
    <div className="w-full max-w-3xl rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">Invoice</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell colSpan={4} className="p-0">
              <Empty className="border-0">
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <Tray />
                  </EmptyMedia>
                  <EmptyTitle>No orders today</EmptyTitle>
                  <EmptyDescription>
                    Orders placed at the bar will show up here in real time.
                  </EmptyDescription>
                </EmptyHeader>
              </Empty>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
};
