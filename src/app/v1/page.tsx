"use client";

import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  IconContext,
  PaletteIcon,
  PencilLineIcon,
} from "@phosphor-icons/react";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

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
    body: "Ik werk uitsluitend op afspraak om de kwaliteit en de persoonlijke focus van elke sessie te waarborgen.",
  },
  {
    title: "Geen voorschot, geen afspraak",
    body: "Je afspraak ligt pas vast zodra ik het voorschot heb ontvangen.",
  },
  {
    title: "Annuleren? Minstens 24 uur op voorhand",
    body: "Lukt het toch niet? Laat het me ten laatste 24 uur vóór de afspraak weten.",
  },
  {
    title: "Te laat afgezegd",
    body: "Bel je later af, dan kan ik het voorschot helaas niet terugbetalen.",
  },
  {
    title: "Studio ethos",
    body: "Hygiëne, privacy en een veilige omgeving staan voor mij centraal. Ik zorg voor een rustige, professionele setting voor jouw nieuwe tattoo.",
  },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

const INSTAGRAM_URL = "https://www.instagram.com/b._you_tattoo/";
const INSTAGRAM_DM_URL = "https://ig.me/m/b._you_tattoo";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 border-b bg-background/80 backdrop-blur transition-colors duration-300 ${
        scrolled ? "border-foreground/10" : "border-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-5 text-[11px] uppercase tracking-[0.25em] md:px-10">

        <div className="font-medium">B. YOU TATTOO</div>
        <nav className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            render={<a href="#portfolio" />}
            className="rounded-full text-[11px] uppercase tracking-[0.25em]"
          >
            Portfolio
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<a href="#contact" />}
            className="rounded-full text-[11px] uppercase tracking-[0.25em]"
          >
            Maak een afspraak
          </Button>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="border-b border-foreground/10 px-6 pt-16 pb-20 md:px-10 md:pt-24 md:pb-32">
      {/* Z — top-left: title */}
      <div className="grid grid-cols-12">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOut }}
          className="col-span-12 font-display font-black uppercase leading-[1.05] tracking-[0.05em] text-[clamp(2.75rem,9.5vw,10rem)] md:col-span-9"
        >
          B. You
          <br />
          Tattoo
        </motion.h1>
      </div>

      {/* Z — middle-right: image */}
      <motion.figure
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: easeOut }}
        className="relative mt-2 grid grid-cols-12 md:-mt-12"
      >
        <div className="col-span-12 md:col-span-5 md:col-start-8">
          <div className="group relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/Brenda.png"
              alt="Brenda — B. You Tattoo"
              fill
              priority
              sizes="(min-width: 768px) 42vw, 100vw"
              className="object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0"
            />
          </div>
        </div>
      </motion.figure>

      {/* Z — bottom-left: quote */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: easeOut }}
        className="relative mt-2 grid grid-cols-12 md:-mt-20"
      >
        <blockquote className="col-span-12 md:col-span-6">
          <p className="font-heading text-3xl leading-snug font-light md:text-4xl">
            Gespecialiseerd in ultra fine-line en botanische kunst in black
            &amp; grey. Of je nu komt met een eigen idee of we samen een uniek
            concept uitwerken: ik verfijn elk ontwerp met uiterste precisie
            zodat het perfect bij jou past.
          </p>
        </blockquote>
      </motion.div>
    </section>
  );
}

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="scroll-mt-20 border-b border-foreground/10 py-16 md:py-24"
    >
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6 px-6 md:mb-16 md:px-10">
        <h2 className="font-heading text-4xl leading-tight font-light md:text-6xl">
          Portfolio
        </h2>
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
                className="scale-100 object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Craft() {
  return (
    <section className="border-b border-foreground/10 px-6 py-24 md:px-10 md:py-40">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: easeOut }}
        className="font-heading text-4xl leading-tight font-light md:text-6xl"
      >
        Inspiratie &amp; ontwerp.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, delay: 0.1, ease: easeOut }}
        className="mt-16 grid grid-cols-1 gap-16 md:mt-24 md:grid-cols-2 md:gap-0"
      >
        <div className="md:border-r md:border-foreground/10 md:pr-12 lg:pr-20">
          <PencilLineIcon className="size-10 opacity-70" />
          <h3 className="mt-8 font-heading text-3xl leading-tight font-light md:text-4xl lg:text-5xl">
            Van inspiratie naar huid.
          </h3>
          <p className="mt-6 max-w-md text-base leading-relaxed opacity-75 md:text-lg">
            Heb je al een duidelijk beeld van wat je wilt, of breng je
            voorbeelden mee als inspiratie? Dat is voor mij het perfecte
            startpunt. Ik kijk samen met jou hoe we deze ideeën kunnen
            vertalen naar mijn kenmerkende fine-line stijl, zodat het
            resultaat altijd natuurlijk en verfijnd aanvoelt.
          </p>
        </div>
        <div className="md:pl-12 lg:pl-20">
          <PaletteIcon className="size-10 opacity-70" />
          <h3 className="mt-8 font-heading text-3xl leading-tight font-light md:text-4xl lg:text-5xl">
            Een uniek concept.
          </h3>
          <p className="mt-6 max-w-md text-base leading-relaxed opacity-75 md:text-lg">
            Hier ligt mijn echte passie: het van nul af aan uitwerken van een
            persoonlijk concept. Heb je een globaal idee of een gevoel dat je
            wilt vastleggen? Ik neem de tijd om een ontwerp te tekenen dat
            exclusief voor jou is — een artistieke samenwerking waarbij jouw
            verhaal centraal staat.
          </p>
        </div>
      </motion.div>
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
        <div className="md:col-span-5 md:pr-10">
          <h2 className="font-heading text-4xl leading-tight font-light md:whitespace-nowrap md:text-5xl">
            Duidelijke afspraken.
          </h2>
        </div>
        <div className="md:col-span-7 md:pl-2">
          <Accordion
            multiple
            className="w-full rounded-none border-0"
            defaultValue={[houseRules[0].title]}
          >
            {houseRules.map((rule) => (
              <AccordionItem
                key={rule.title}
                value={rule.title}
                className="not-last:border-b border-foreground/10 data-open:bg-transparent"
              >
                <AccordionTrigger className="group/trigger items-center border-0 px-0 py-6 text-left hover:no-underline focus-visible:ring-0 [&_[data-slot=accordion-trigger-icon]]:hidden!">
                  <span className="flex w-full items-center gap-6">
                    <span className="font-heading text-2xl font-light tracking-tight md:text-3xl">
                      {rule.title}
                    </span>
                    <ArrowDownIcon className="ml-auto size-4 shrink-0 opacity-50 transition-transform duration-300 group-data-[panel-open]/trigger:rotate-180" />
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-0 pb-6">
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
      className="scroll-mt-20 px-6 py-16 md:px-10 md:py-28"
    >
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: easeOut }}
        className="font-display font-black uppercase leading-[1.05] tracking-[0.05em] text-[clamp(2.75rem,9.5vw,10rem)]"
      >
        Klaar voor je volgende tattoo?
      </motion.h2>

      <div className="mt-8 grid grid-cols-1 gap-10 md:mt-[92px] md:grid-cols-3 md:gap-0">
        <div className="flex flex-col md:min-h-[92px] md:border-r md:border-foreground/10 md:pr-10">
          <p className="text-[11px] uppercase tracking-[0.3em] opacity-60">
            @b._you_tattoo
          </p>
          <div className="mt-5 md:mt-auto">
            <a
              href={INSTAGRAM_DM_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-baseline gap-4"
            >
              <span className="font-heading text-3xl leading-tight font-light md:text-2xl">
                Stuur een DM
              </span>
              <ArrowUpRightIcon className="size-8 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:size-6" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:min-h-[92px] md:border-r md:border-foreground/10 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.3em] opacity-60">
            // Studio
          </p>
          <div className="mt-5 md:mt-auto">
            <a
              href="https://maps.app.goo.gl/zUR6iJKpnHLFi1uZ9"
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-baseline gap-4"
            >
              <span className="font-heading text-2xl leading-tight font-light md:text-2xl">
                Steenstraat 3A, 9340 Lede
              </span>
              <ArrowUpRightIcon className="size-6 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:min-h-[92px] md:pl-10">
          <p className="mt-5 font-heading text-2xl leading-tight font-light md:mt-auto">
            Ik werk uitsluitend op afspraak.
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
        <Craft />
        <HouseRules />
        <Footer />
      </div>
    </IconContext.Provider>
  );
}
