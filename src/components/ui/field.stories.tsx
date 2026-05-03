import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Checkbox } from "./checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "./field";
import { Input } from "./input";
import { RadioGroup, RadioGroupItem } from "./radio-group";

const meta: Meta<typeof Field> = {
  title: "UI/Field",
  component: Field,
};

export default meta;
type Story = StoryObj<typeof Field>;

export const Default: Story = {
  render: () => (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="email-default">Email</FieldLabel>
      <Input id="email-default" type="email" placeholder="hello@perron.coffee" />
      <FieldDescription>
        We'll only email you about your order.
      </FieldDescription>
    </Field>
  ),
};

export const WithError: Story = {
  render: () => (
    <Field className="max-w-sm" data-invalid="true">
      <FieldLabel htmlFor="email-bad">Email</FieldLabel>
      <Input
        id="email-bad"
        type="email"
        defaultValue="not-an-email"
        aria-invalid
      />
      <FieldError>Please enter a valid email address.</FieldError>
    </Field>
  ),
};

export const Required: Story = {
  render: () => (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="name-required">
        Name <span className="text-destructive">*</span>
      </FieldLabel>
      <Input id="name-required" placeholder="Your name" required />
      <FieldDescription>Required for pickup orders.</FieldDescription>
    </Field>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Field orientation="horizontal" className="max-w-md">
      <Checkbox id="newsletter-h" defaultChecked />
      <FieldContent>
        <FieldLabel htmlFor="newsletter-h">Weekly newsletter</FieldLabel>
        <FieldDescription>
          Pourover tips and new beans, every Friday.
        </FieldDescription>
      </FieldContent>
    </Field>
  ),
};

export const FieldSetExample: Story = {
  render: () => (
    <FieldSet className="max-w-sm">
      <FieldLegend>Pickup time</FieldLegend>
      <FieldDescription>
        Choose when you'd like to collect your order.
      </FieldDescription>
      <RadioGroup defaultValue="now">
        <Field orientation="horizontal">
          <RadioGroupItem value="now" id="time-now" />
          <FieldLabel htmlFor="time-now" className="font-normal">
            As soon as possible
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="15" id="time-15" />
          <FieldLabel htmlFor="time-15" className="font-normal">
            In 15 minutes
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="30" id="time-30" />
          <FieldLabel htmlFor="time-30" className="font-normal">
            In 30 minutes
          </FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>
  ),
};

export const Group: Story = {
  render: () => (
    <FieldGroup className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="g-name">Name</FieldLabel>
        <Input id="g-name" placeholder="Your name" />
      </Field>
      <FieldSeparator />
      <Field>
        <FieldLabel htmlFor="g-email">Email</FieldLabel>
        <Input id="g-email" type="email" placeholder="hello@perron.coffee" />
        <FieldDescription>For order receipts only.</FieldDescription>
      </Field>
    </FieldGroup>
  ),
};
