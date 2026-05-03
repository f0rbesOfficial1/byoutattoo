import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

const meta = {
  title: "UI/Typography",
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShowAllElements: Story = {
  render: () => (
    <article className="prose mx-auto w-full max-w-2xl space-y-6 font-sans">
      <h1 className="font-heading scroll-m-20 text-4xl font-medium tracking-tight text-balance">
        The taste of an unhurried morning
      </h1>
      <p className="text-xl leading-7 text-muted-foreground">
        A short essay on slow service, single origins, and the quiet
        rituals that make a coffee bar feel like home.
      </p>

      <h2 className="font-heading mt-10 scroll-m-20 border-b pb-2 text-3xl font-medium tracking-tight">
        Why slow matters
      </h2>
      <p className="leading-7">
        The best baristas treat extraction like punctuation. A pause
        between dosing and tamping. A breath before the shot pulls. These
        are the small choices that separate a good cup from a memorable
        one.
      </p>

      <h3 className="font-heading mt-8 scroll-m-20 text-2xl font-medium tracking-tight">
        Three things to look for
      </h3>
      <ul className="my-6 ml-6 list-disc space-y-2 [&>li]:mt-2">
        <li>Beans roasted within the last two weeks.</li>
        <li>Water temperature held steady between brews.</li>
        <li>A barista who talks about flavour without performance.</li>
      </ul>

      <h4 className="font-heading mt-6 scroll-m-20 text-xl font-medium tracking-tight">
        A note on milk
      </h4>
      <p className="leading-7">
        Texture comes before temperature. Stretch first, then heat.
        Anything past sixty five degrees and the sweetness is gone.
      </p>

      <blockquote className="mt-6 border-l-2 pl-6 italic text-foreground">
        &ldquo;Coffee is a conversation between the bean, the water, and
        the person pouring.&rdquo;
      </blockquote>

      <p className="leading-7">
        You can adjust the grind with{" "}
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-medium">
          grinder.adjust(0.2)
        </code>{" "}
        between shots without losing your reference point.
      </p>

      <div className="my-6 w-full overflow-y-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Drink</TableHead>
              <TableHead>Dose</TableHead>
              <TableHead className="text-right">Yield</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Espresso</TableCell>
              <TableCell>18 g</TableCell>
              <TableCell className="text-right">36 g</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Ristretto</TableCell>
              <TableCell>18 g</TableCell>
              <TableCell className="text-right">22 g</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Filter</TableCell>
              <TableCell>20 g</TableCell>
              <TableCell className="text-right">320 g</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="text-lg font-medium">
        Large text reads as a quiet emphasis without shouting.
      </p>
      <small className="block text-sm leading-none font-medium">
        Small text fits captions and footnotes.
      </small>
      <p className="text-sm text-muted-foreground">
        Muted text steps back so primary content can lead.
      </p>
    </article>
  ),
};
