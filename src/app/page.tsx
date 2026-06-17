"use client";

import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  IconContext,
} from "@phosphor-icons/react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HoverRipple } from "@/components/hover-ripple";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const portfolio = [
  { src: "/716429932_1399299572033038_5817521590648724993_n.jpg", caption: "Fine-line" },
  { src: "/716829155_4485343235033910_3736542905288716270_n.jpg", caption: "Botanisch" },
  { src: "/717993246_1554463659377763_3569136088631973217_n.jpg", caption: "Bloemen" },
  { src: "/718051323_3650598065089006_1788345148410000851_n.jpg", caption: "Veldbloem" },
  { src: "/718188610_2251545052264117_8760032857395554032_n.jpg", caption: "Lijnwerk" },
  { src: "/718526865_1940587539933306_6560126626561466447_n.jpg", caption: "Stengel & Knop" },
  { src: "/718815528_4242965705955099_6601211975497753825_n.jpg", caption: "Blad" },
  { src: "/719597701_2471450543375249_384174247681877628_n.jpg", caption: "Tak" },
  { src: "/719671044_2857523027957801_577368690398346291_n.jpg", caption: "Bloemblad" },
  { src: "/719863184_1675630447102660_2618187317782632751_n.jpg", caption: "Twijg" },
  { src: "/720242561_1405813034638666_3547502602724203392_n.jpg", caption: "Minimaal" },
  { src: "/720587864_1031328099467812_6363184431022512253_n.jpg", caption: "Bloesem" },
  { src: "/720611015_2326136001529463_1336337368027685730_n.jpg", caption: "Loof" },
  { src: "/720654583_866404023194328_115012821063893525_n.jpg", caption: "Fluistering" },
  { src: "/720814087_1289307603190934_1253803418743517958_n.jpg", caption: "Symbool" },
  { src: "/721159298_822209814156984_6316538393284476438_n.jpg", caption: "Ornament" },
  { src: "/721296877_2425208554671943_4670773400449216152_n.jpg", caption: "Belettering" },
  { src: "/721465330_2045107149764043_3904433134034476357_n.jpg", caption: "Contour" },
  { src: "/723240140_1300331825598173_4317328249936227287_n.jpg", caption: "Schets" },
  { src: "/723406310_864875329997957_4812793325309155006_n.jpg", caption: "Botanisch II" },
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
      <div className="relative mt-16 grid grid-cols-12 md:-mt-48">
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
          className="col-span-12 mt-16 md:col-span-6 md:row-start-1 md:mt-0 md:self-end"
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

function PortfolioSlide({
  item,
  className,
  interactive = true,
}: {
  item: (typeof portfolio)[number];
  className?: string;
  interactive?: boolean;
}) {
  const image = (
    <Image
      src={item.src}
      alt={item.caption}
      fill
      loading="eager"
      sizes="(min-width: 1024px) 32vw, (min-width: 768px) 42vw, 78vw"
      className={cn(
        "object-cover grayscale",
        interactive &&
          "scale-100 transition-transform duration-700 ease-out group-hover:scale-105",
      )}
    />
  );

  return (
    <div className={className}>
      {interactive ? (
        <HoverRipple className="group relative h-full w-full overflow-hidden">
          {image}
        </HoverRipple>
      ) : (
        <div className="relative h-full w-full overflow-hidden">{image}</div>
      )}
    </div>
  );
}

const MOBILE_CAROUSEL_MIN_SCALE = 0.9;
const MOBILE_CAROUSEL_MAX_SCALE = 1.05;
const MOBILE_CAROUSEL_TWEEN_FACTOR = 0.16;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function setMobileCarouselTweenScale(
  emblaApi: NonNullable<ReturnType<typeof useEmblaCarousel>[1]>,
) {
  const engine = emblaApi.internalEngine();
  const scrollProgress = emblaApi.scrollProgress();
  const slideNodes = emblaApi.slideNodes();

  emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
    engine.slideRegistry[snapIndex]?.forEach((slideIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();

          if (slideIndex === loopItem.index && target !== 0) {
            const sign = Math.sign(target);

            if (sign === -1) {
              diffToTarget = scrollSnap - (1 + scrollProgress);
            }
            if (sign === 1) {
              diffToTarget = scrollSnap + (1 - scrollProgress);
            }
          }
        });
      }

      const scale = clamp(
        MOBILE_CAROUSEL_MAX_SCALE -
          Math.abs(diffToTarget) * MOBILE_CAROUSEL_TWEEN_FACTOR,
        MOBILE_CAROUSEL_MIN_SCALE,
        MOBILE_CAROUSEL_MAX_SCALE,
      );

      slideNodes[slideIndex].style.transform = `scale(${scale})`;
    });
  });
}

function PortfolioMobileCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    duration: 28,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setMobileCarouselTweenScale(emblaApi);
    };

    const onScroll = () => {
      setMobileCarouselTweenScale(emblaApi);
    };

    onSelect();
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("scroll", onScroll);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="py-3 pb-6">
      <div ref={emblaRef} className="overflow-hidden">
        <ul className="flex items-center touch-pan-y">
          {portfolio.map((item, index) => (
            <li
              key={item.src}
              aria-current={index === selectedIndex ? "true" : undefined}
              className="min-w-0 shrink-0 grow-0 basis-[72vw] origin-center pr-4 will-change-transform"
            >
              <PortfolioSlide
                item={item}
                interactive={false}
                className="relative aspect-[3/4]"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PortfolioDesktopTrack() {
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
    <>
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
        <ul ref={trackRef} className="flex w-max will-change-transform">
          {items.map((item, i) => (
            <li
              key={`${item.src}-${i}`}
              className="mr-6 aspect-[3/4] w-[42vw] shrink-0 lg:w-[32vw]"
            >
              <PortfolioSlide item={item} className="relative h-full w-full" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function Portfolio() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section className="pt-10 pb-2 md:pt-16 md:pb-4">
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

      <div id="portfolio" className="relative scroll-mt-20">
        {isDesktop ? (
          <PortfolioDesktopTrack />
        ) : (
          <PortfolioMobileCarousel />
        )}
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
