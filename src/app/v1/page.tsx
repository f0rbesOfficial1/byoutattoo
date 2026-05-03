"use client";

import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  IconContext,
} from "@phosphor-icons/react";
import { motion } from "motion/react";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const portfolio = [
  { src: "/Tattoo1.png", caption: "Fine-line" },
  { src: "/Tattoo2.png", caption: "Botanisch" },
  { src: "/Tattoo3.png", caption: "Bloemen" },
  { src: "/Tattoo4.png", caption: "Veldbloem" },
  { src: "/Tattoo5.png", caption: "Lijnwerk" },
  { src: "/Tattoo6.png", caption: "Stengel & Knop" },
  { src: "/Tattoo7.png", caption: "Blad" },
  { src: "/Tattoo8.png", caption: "Tak" },
  { src: "/Tattoo9.png", caption: "Bloemblad" },
  { src: "/Tattoo10.png", caption: "Twijg" },
  { src: "/Tattoo11.png", caption: "Minimaal" },
  { src: "/Tattoo12.png", caption: "Bloesem" },
  { src: "/Tattoo13.png", caption: "Loof" },
  { src: "/Tattoo14.png", caption: "Fluistering" },
  { src: "/Tattoo15.png", caption: "Symbool" },
  { src: "/Tattoo16.png", caption: "Ornament" },
  { src: "/Tattoo17.png", caption: "Belettering" },
  { src: "/Tattoo18.png", caption: "Contour" },
  { src: "/Tattoo19.png", caption: "Schets" },
  { src: "/Tattoo20.png", caption: "Botanisch II" },
];

const houseRules = [
  {
    title: "Werken op afspraak",
    body: "Uitsluitend op afspraak voor volledige focus.",
  },
  {
    title: "Voorschot & Boeking",
    body: "Niet-restitueerbaar voorschot vereist bij elke boeking.",
  },
  {
    title: "Studio Ethos",
    body: "Een rustige, hygiënische omgeving in het hart van de regio.",
  },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

const INSTAGRAM_URL = "https://www.instagram.com/b._you_tattoo/";
const INSTAGRAM_DM_URL = "https://ig.me/m/b._you_tattoo";

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-foreground/10 bg-background/80 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-5 text-[11px] uppercase tracking-[0.25em] md:px-10">
        <div className="font-medium">B. You Tattoo</div>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 transition-opacity hover:opacity-60"
        >
          Contact
          <ArrowDownIcon className="size-3.5 transition-transform group-hover:translate-y-0.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="border-b border-foreground/10 px-6 pt-16 pb-16 md:px-10 md:pt-24 md:pb-28">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: easeOut }}
        className="font-display font-black leading-[0.82] tracking-[-0.05em] text-[clamp(3.75rem,16.5vw,18rem)]"
      >
        B. You
        <br />
        Tattoo.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
        className="mt-14 grid grid-cols-1 items-stretch gap-8 md:mt-24 md:grid-cols-12 md:gap-12"
      >
        <figure className="md:col-span-5">
          <p className="text-[11px] uppercase tracking-[0.3em] opacity-60">
            // De Artieste
          </p>
          <div className="group relative mt-5 aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/Brenda.png"
              alt="Brenda — B. You Tattoo"
              fill
              priority
              sizes="(min-width: 768px) 42vw, 100vw"
              className="object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0"
            />
          </div>
        </figure>
        <div className="flex flex-col justify-end md:col-span-6 md:col-start-7">
          <p className="font-heading text-2xl leading-snug font-light md:text-4xl">
            <span className="italic">By Brenda</span> — Gespecialiseerd in
            ultra fine-line en botanische kunst. Tijdloze verhalen vertaald
            naar de huid.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="border-b border-foreground/10 py-16 md:py-24"
    >
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6 px-6 md:mb-16 md:px-10">
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] opacity-60">
            // Portfolio
          </p>
          <h2 className="mt-4 font-heading text-4xl leading-tight font-light md:text-6xl">
            Geselecteerd werk
            <span className="italic"> 2024 — 2026</span>
          </h2>
        </div>
        <Button
          variant="outline"
          render={
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
            />
          }
          className="rounded-full border-foreground/30 bg-transparent text-[11px] uppercase tracking-[0.25em] hover:bg-foreground hover:text-background"
        >
          Bekijk alles op Instagram
          <ArrowUpRightIcon className="size-3.5" />
        </Button>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent md:w-24" />
        <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-6 md:gap-6 md:px-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {portfolio.map((item, i) => (
            <motion.li
              key={item.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: Math.min(i * 0.04, 0.4),
                ease: easeOut,
              }}
              className="group relative aspect-[3/4] w-[78vw] shrink-0 snap-start overflow-hidden md:w-[42vw] lg:w-[32vw]"
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="(min-width: 1024px) 32vw, (min-width: 768px) 42vw, 78vw"
                className="object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 text-[11px] uppercase tracking-[0.25em] text-foreground mix-blend-difference md:p-5">
                <span className="tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex items-center gap-2">
                  <ArrowRightIcon className="size-3.5" />
                  {item.caption}
                </span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function HouseRules() {
  return (
    <section className="border-b border-foreground/10 px-6 py-16 md:px-10 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: easeOut }}
        className="grid grid-cols-1 gap-12 md:grid-cols-12"
      >
        <div className="md:col-span-4 md:border-r md:border-foreground/10 md:pr-10">
          <p className="text-[11px] uppercase tracking-[0.3em] opacity-60">
            // Huisregels
          </p>
          <h2 className="mt-6 font-heading text-4xl leading-tight font-light md:text-5xl">
            Rust, focus en
            <br />
            <span className="italic">eerlijkheid.</span>
          </h2>
        </div>
        <div className="md:col-span-8 md:pl-2">
          <Accordion
            className="w-full rounded-none border-0"
            defaultValue={[houseRules[0].title]}
          >
            {houseRules.map((rule, i) => (
              <AccordionItem
                key={rule.title}
                value={rule.title}
                className="border-b border-foreground/10 first:border-t data-open:bg-transparent"
              >
                <AccordionTrigger className="group items-center border-0 px-0 py-6 text-left hover:no-underline focus-visible:ring-0 [&>svg]:hidden">
                  <span className="flex w-full items-center gap-6 md:gap-10">
                    <span className="text-[11px] tabular-nums opacity-50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-heading text-2xl font-light tracking-tight md:text-3xl">
                      {rule.title}
                    </span>
                    <ArrowDownIcon className="ml-auto size-4 shrink-0 opacity-50 transition-transform duration-300 group-data-[panel-open]:rotate-180" />
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-[calc(2rem+1.5rem)] md:pl-[calc(2.5rem+2.5rem)]">
                  <p className="max-w-md text-base leading-relaxed opacity-75">
                    {rule.body}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      id="contact"
      className="px-6 pt-16 pb-16 md:px-10 md:pt-28 md:pb-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: easeOut }}
        className="font-display font-black leading-[0.85] tracking-[-0.04em] text-[clamp(4rem,18vw,18rem)]"
      >
        Contact
        <ArrowDownIcon className="ml-3 inline-block size-[0.7em] align-baseline stroke-[0.5]" />
      </motion.h2>

      <div className="mt-16 grid grid-cols-1 gap-10 border-t border-foreground/10 pt-12 md:mt-24 md:grid-cols-3 md:gap-0 md:pt-16">
        <div className="md:border-r md:border-foreground/10 md:pr-10">
          <p className="text-[11px] uppercase tracking-[0.3em] opacity-60">
            // Instagram
          </p>
          <a
            href={INSTAGRAM_DM_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="group mt-5 flex items-baseline justify-between gap-4 border-b border-foreground/20 pb-3 transition-colors hover:border-foreground"
          >
            <span className="font-heading text-2xl leading-tight font-light md:text-3xl">
              <span className="italic">Stuur</span> een DM
            </span>
            <ArrowUpRightIcon className="size-6 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
          <p className="mt-3 text-[11px] uppercase tracking-[0.25em] opacity-50">
            @b._you_tattoo
          </p>
        </div>

        <div className="md:border-r md:border-foreground/10 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.3em] opacity-60">
            // Studio
          </p>
          <p className="mt-5 font-heading text-2xl leading-snug font-light md:text-3xl">
            Studio adres komt hier
            <br />
            <span className="italic">— Regio [Stad], België</span>
          </p>
        </div>

        <div className="md:pl-10">
          <p className="text-[11px] uppercase tracking-[0.3em] opacity-60">
            // Status
          </p>
          <p className="mt-5 font-heading text-2xl leading-snug font-light md:text-3xl">
            Uitsluitend op afspraak.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function V1Page() {
  return (
    <IconContext.Provider value={{ weight: "thin" }}>
      <div className="bg-background text-foreground min-h-screen">
        <Header />
        <Hero />
        <Portfolio />
        <HouseRules />
        <Footer />
      </div>
    </IconContext.Provider>
  );
}
