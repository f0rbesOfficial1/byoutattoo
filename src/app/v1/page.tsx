"use client";

import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  IconContext,
} from "@phosphor-icons/react";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
    body: "Ik neem graag de tijd voor elke klant. Daarom werk ik uitsluitend op afspraak in een rustige privé-setting. Zo kan ik me volledig focussen op de details van jouw tattoo zonder afleidingen van buitenaf.",
  },
  {
    title: "Boeking & voorschot",
    body: "Een afspraak is pas definitief na ontvangst van een voorschot. Dit bedrag dient als bevestiging van je plekje en wordt op de dag van de sessie uiteraard verrekend met de totaalprijs. Let op: voorschotten zijn niet-restitueerbaar.",
  },
  {
    title: "Verplaatsen of annuleren",
    body: "Kan je er onverhoopt niet bij zijn? Laat het me minstens 24 uur op voorhand weten via Instagram DM. Zo hebben we de tijd om je afspraak te verplaatsen met behoud van je voorschot. Bij kortere termijnen komt het voorschot helaas te vervallen.",
  },
  {
    title: "Voorbereiding op je sessie",
    body: "Voor het beste resultaat vraag ik je om goed gehydrateerd en uitgerust te komen. Drink 24 uur van tevoren geen alcohol en zorg dat de huid rond de plek van de tattoo niet verbrand is door de zon of beschadigd is.",
  },
  {
    title: "Maatwerk",
    body: "Of je nu kiest voor een van mijn eigen ontwerpen, een gepersonaliseerd design op maat, of een meegebracht voorbeeld: ik voer elk werk met uiterste precisie uit. Het belangrijkste is dat het ontwerp goed voelt voor jou.\n\n#B. you",
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
            nativeButton={false}
            render={<a href="#portfolio" />}
            className="rounded-full text-[11px] uppercase tracking-[0.25em]"
          >
            Portfolio
          </Button>
          <Button
            variant="ghost"
            size="sm"
            nativeButton={false}
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
    <section className="px-6 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24">
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

      {/* Z — image right + quote bottom-left, bottom-aligned */}
      <div className="relative mt-2 grid grid-cols-12 md:-mt-48">
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: easeOut }}
          className="col-span-12 md:col-span-5 md:col-start-8 md:row-start-1 md:mt-[72px] md:pl-10"
        >
          <div className="group relative aspect-[4/5] w-full">
            <div
              className="pointer-events-none absolute -inset-[11px] bg-foreground/20 transition-colors duration-500 ease-out group-hover:bg-foreground/80"
              style={{
                clipPath:
                  "polygon(46px 0, 100% 0, 100% calc(100% - 46px), calc(100% - 46px) 100%, 0 100%, 0 46px)",
              }}
            />
            <div
              className="pointer-events-none absolute -inset-[10px] bg-background"
              style={{
                clipPath:
                  "polygon(46px 0, 100% 0, 100% calc(100% - 46px), calc(100% - 46px) 100%, 0 100%, 0 46px)",
              }}
            />
            <div
              className="group relative h-full w-full overflow-hidden"
              style={{
                clipPath:
                  "polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)",
              }}
            >
              <Image
                src="/Brenda.png"
                alt="Brenda — B. You Tattoo"
                fill
                priority
                sizes="(min-width: 768px) 38vw, 100vw"
                className="scale-100 object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </motion.figure>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="col-span-12 mt-2 md:col-span-6 md:row-start-1 md:mt-0 md:self-end"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] opacity-60">
            // Mijn expertise
          </p>
          <p className="mt-4 font-heading text-3xl leading-snug font-light md:mt-6 md:text-4xl">
            Ultra fine-line en botanisch blackwork.
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}

function Portfolio() {
  const items = [...portfolio, ...portfolio];
  const trackRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animation: Animation | null = null;

    const start = () => {
      animation?.cancel();
      const setStart = track.children[0] as HTMLElement | undefined;
      const loopPoint = track.children[portfolio.length] as
        | HTMLElement
        | undefined;
      if (!setStart || !loopPoint) return;

      const distance = loopPoint.offsetLeft - setStart.offsetLeft;
      if (distance <= 0) return;

      animation = track.animate(
        [
          { transform: "translate3d(0, 0, 0)" },
          { transform: `translate3d(-${distance}px, 0, 0)` },
        ],
        { duration: 70000, iterations: Infinity, easing: "linear" },
      );
    };

    start();

    const onResize = () => start();
    window.addEventListener("resize", onResize);

    const trackEl = track;
    const onEnter = () => {
      if (animation) animation.playbackRate = 0;
    };
    const onLeave = () => {
      if (animation) animation.playbackRate = 1;
    };
    trackEl.addEventListener("pointerenter", onEnter);
    trackEl.addEventListener("pointerleave", onLeave);

    return () => {
      animation?.cancel();
      window.removeEventListener("resize", onResize);
      trackEl.removeEventListener("pointerenter", onEnter);
      trackEl.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section
      id="portfolio"
      className="scroll-mt-20 pt-10 pb-2 md:pt-16 md:pb-4"
    >
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6 px-6 md:mb-16 md:px-10">
        <h2 className="font-heading text-4xl leading-tight font-light md:text-6xl">
          Portfolio
        </h2>
        <Button
          variant="secondary"
          nativeButton={false}
          render={
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
            />
          }
          className="rounded-full text-[11px] uppercase tracking-[0.25em]"
        >
          Bekijk alles op Instagram
          <ArrowUpRightIcon className="size-3.5" />
        </Button>
      </div>

      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 backdrop-blur-md md:w-40"
          style={{
            maskImage: "linear-gradient(to right, black, transparent)",
            WebkitMaskImage: "linear-gradient(to right, black, transparent)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 backdrop-blur-md md:w-40"
          style={{
            maskImage: "linear-gradient(to left, black, transparent)",
            WebkitMaskImage: "linear-gradient(to left, black, transparent)",
          }}
        />
        <div
          className="group/track overflow-hidden pb-6"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          }}
        >
          <ul
            ref={trackRef}
            className="flex w-max will-change-transform"
          >
            {items.map((item, i) => (
              <li
                key={`${item.src}-${i}`}
                className="group relative mr-4 aspect-[3/4] w-[78vw] shrink-0 overflow-hidden md:mr-6 md:w-[42vw] lg:w-[32vw]"
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  loading="eager"
                  sizes="(min-width: 1024px) 32vw, (min-width: 768px) 42vw, 78vw"
                  className="scale-100 object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Craft() {
  return (
    <section className="px-6 pt-0 pb-20 md:px-10 md:pt-0 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, delay: 0.1, ease: easeOut }}
        className="grid grid-cols-1 font-heading text-xl leading-[1.25] font-light md:grid-cols-3 md:text-3xl lg:text-4xl"
      >
        <p className="px-6 py-6 text-center md:py-2">B. Inspired</p>
        <p className="px-6 py-6 text-center md:py-2">B. Unique</p>
        <p className="px-6 py-6 text-center md:py-2">B. You</p>
      </motion.div>
    </section>
  );
}

function HouseRules() {
  return (
    <section className="border-t border-foreground/10 px-6 py-20 md:px-10 md:py-32">
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
                  <p className="max-w-md text-base leading-relaxed whitespace-pre-line opacity-75">
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
      className="scroll-mt-20 px-6 py-10 md:px-10 md:py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: easeOut }}
      >
        <a
          href={INSTAGRAM_DM_URL}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Maak een afspraak via Instagram DM"
          className="group block"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] opacity-60">
            @b._you_tattoo
          </p>
          <h2 className="mt-4 font-display font-black uppercase leading-[1.05] tracking-[0.05em] text-[clamp(2.75rem,9.5vw,10rem)] md:mt-6">
            <span className="transition-opacity duration-300 group-hover:opacity-80">
              Maak een afspraak
            </span>
            <ArrowUpRightIcon className="relative top-[0.1em] ml-[0.4em] inline size-[0.5em] align-baseline transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2" />
          </h2>
        </a>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 gap-10 md:mt-[92px] md:grid-cols-2 md:gap-0">
        <div className="flex flex-col md:min-h-[92px] md:pr-10">
          <p className="text-[11px] uppercase tracking-[0.3em] opacity-60">
            // Adres
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
              <ArrowUpRightIcon className="relative top-[0.1em] size-6 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:min-h-[92px] md:items-end md:pl-10 md:text-right">
          <p className="mt-5 font-heading text-2xl leading-tight font-light md:mt-auto">
            Uitsluitend op afspraak.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function V1Page() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

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
