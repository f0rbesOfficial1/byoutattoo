"use client";

import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  IconContext,
} from "@phosphor-icons/react";
import useEmblaCarousel from "embla-carousel-react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
} from "motion/react";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const portfolio = [
  { src: "/716429932_1399299572033038_5817521590648724993_n.jpg", caption: "Fine-line" },
  { src: "/716829155_4485343235033910_3736542905288716270_n.jpg", caption: "Floral" },
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
  { src: "/723406310_864875329997957_4812793325309155006_n.jpg", caption: "Floral II" },
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

type PortfolioItem = (typeof portfolio)[number];

// Fisher–Yates shuffle on a copy, so the source array stays intact.
function shuffle<T>(items: readonly T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const easeOut = [0.16, 1, 0.3, 1] as const;

const INSTAGRAM_URL = "https://www.instagram.com/b._you_tattoo/";
const INSTAGRAM_DM_URL = "https://ig.me/m/b._you_tattoo";

// Layout effect on the client (flash-free), plain effect on the server.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Show the intro splash once per browser-tab session.
const INTRO_SESSION_KEY = "byou-intro-shown";
// TEMP: replay the splash on every load while tuning it. Set false to
// restore the once-per-session behaviour.
const REPLAY_INTRO_EVERY_LOAD = true;
// Guards against React Strict Mode's double-mount re-deciding within one load.
let introDecided = false;

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
      <div className="flex items-center justify-between px-8 py-4 text-[11px] uppercase tracking-[0.25em] md:px-12">
        <a href="#top" className="font-medium">
          B. YOU TATTOO
        </a>
        <nav className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            nativeButton={false}
            render={<a href="#over-mij" />}
            className="hidden rounded-full text-[11px] uppercase tracking-[0.25em] md:inline-flex"
          >
            Over mij
          </Button>
          <Button
            variant="ghost"
            size="sm"
            nativeButton={false}
            render={<a href="#portfolio" />}
            className="hidden rounded-full text-[11px] uppercase tracking-[0.25em] md:inline-flex"
          >
            Portfolio
          </Button>
          <Button
            variant="ghost"
            size="sm"
            nativeButton={false}
            render={<a href="#afspraken" />}
            className="hidden rounded-full text-[11px] uppercase tracking-[0.25em] md:inline-flex"
          >
            Afspraken
          </Button>
          <Button
            variant="ghost"
            size="sm"
            nativeButton={false}
            render={<a href="#contact" />}
            className="rounded-full text-[11px] uppercase tracking-[0.25em]"
          >
            <span className="sm:hidden">Afspraak</span>
            <span className="hidden sm:inline">Maak een afspraak</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}

function IntroOverlay() {
  const [show, setShow] = useState(true);
  const reduceMotion = useReducedMotion();

  // Decide before first paint: skip (no flash) if already seen this session.
  useIsomorphicLayoutEffect(() => {
    if (introDecided) return;
    introDecided = true;
    let seen = false;
    try {
      seen = sessionStorage.getItem(INTRO_SESSION_KEY) === "1";
      sessionStorage.setItem(INTRO_SESSION_KEY, "1");
    } catch {
      // sessionStorage blocked (private mode, etc.) — just play the intro.
    }
    if (seen && !REPLAY_INTRO_EVERY_LOAD) setShow(false);
  }, []);

  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = "hidden";

    const dismiss = () => setShow(false);
    const timer = setTimeout(dismiss, reduceMotion ? 1400 : 2600);
    window.addEventListener("wheel", dismiss, { passive: true, once: true });
    window.addEventListener("touchmove", dismiss, { passive: true, once: true });
    window.addEventListener("keydown", dismiss, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("wheel", dismiss);
      window.removeEventListener("touchmove", dismiss);
      window.removeEventListener("keydown", dismiss);
      document.body.style.overflow = "";
    };
  }, [show, reduceMotion]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = "";
      }}
    >
      {show && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: easeOut }}
          onClick={() => setShow(false)}
          role="button"
          aria-label="Intro overslaan"
          className="fixed inset-0 z-[60] flex cursor-pointer flex-col items-center justify-center bg-background px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04, y: -16 }}
            transition={{ duration: 1, ease: easeOut }}
            className="relative aspect-square w-[78%] max-w-[34rem] bg-background md:w-[40%]"
          >
            <Image
              src="/Logo.png"
              alt="B. You Tattoo"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 78vw"
              className="object-contain mix-blend-screen"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: easeOut }}
            className="mt-8 text-[11px] uppercase tracking-[0.4em] opacity-60 md:mt-10"
          >
            Fineline · floral · dotwork
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function About() {
  return (
    <section
      id="over-mij"
      className="scroll-mt-20 px-8 pt-24 pb-20 md:px-12 md:pt-32 md:pb-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: easeOut }}
        className="grid grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-16"
      >
        {/* Portrait */}
        <figure className="md:col-span-5 md:row-start-1">
          <div className="group relative mx-auto aspect-[4/5] w-2/3 max-w-sm md:w-full md:max-w-none">
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
              className="relative h-full w-full overflow-hidden"
              style={{
                clipPath:
                  "polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)",
              }}
            >
              <Image
                src="/Brenda.png"
                alt="Brenda — B. You Tattoo"
                fill
                sizes="(min-width: 768px) 38vw, 66vw"
                className="scale-100 object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </figure>

        {/* Bio */}
        <div className="md:col-span-6 md:col-start-7 md:row-start-1">
          <p className="text-[11px] uppercase tracking-[0.3em] opacity-60">
            {"// Over mij"}
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1, delay: 0.15, ease: easeOut }}
            className="mt-3 font-display font-semibold leading-[0.9] tracking-tight text-[clamp(3.25rem,8vw,6.5rem)]"
          >
            Brenda
          </motion.h2>
          <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed opacity-75 md:mt-10">
            <p>
              Mijn naam is Brenda en zorg dragen voor mensen staat centraal in
              alles wat ik doe. Als zorgkundige en kinderbegeleidster in
              hoofdberoep ben ik dagelijks bezig met aandacht, vertrouwen en het
              creëren van een veilige omgeving voor anderen.
            </p>
            <p>
              Sinds 2024 volg ik daarnaast mijn passie voor tattoo-art en ben ik
              actief als tattoo-artiest in bijberoep. Ik specialiseer me in
              fijne, elegante zwart-wit tattoos met oog voor detail. Je kan bij
              mij terecht voor fineline tattoos, bloemenmotieven, mandala&apos;s
              en dotwork designs.
            </p>
            <p>
              Elke tattoo wordt met zorg en precisie gezet, volledig afgestemd
              op jouw wensen en persoonlijke verhaal. Ik geloof dat een tattoo
              meer is dan een tekening op de huid; het is een blijvende
              herinnering, een betekenisvol symbool of een stukje van jezelf dat
              je wilt uitdragen.
            </p>
            <p>
              Met een rustige aanpak, een luisterend oor en veel aandacht voor
              hygiëne en kwaliteit zorg ik ervoor dat jij je op je gemak voelt
              tijdens het hele proces.
            </p>
          </div>
          <p className="mt-5 max-w-xl text-base leading-relaxed opacity-75">
            Ik kijk ernaar uit om samen jouw idee tot leven te brengen.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

function PortfolioSlide({
  item,
  className,
}: {
  item: PortfolioItem;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={item.src}
          alt={`Tattoo — ${item.caption}`}
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 32vw, (min-width: 768px) 42vw, 78vw"
          className="object-cover grayscale"
        />
      </div>
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

function PortfolioMobileCarousel({ slides }: { slides: PortfolioItem[] }) {
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

  // Recalculate when the (shuffled) slide order changes after mount.
  useEffect(() => {
    emblaApi?.reInit();
  }, [emblaApi, slides]);

  return (
    <div className="py-3 pb-6">
      <div ref={emblaRef} className="overflow-hidden">
        <ul className="flex items-center touch-pan-y">
          {slides.map((item, index) => (
            <li
              key={item.src}
              aria-current={index === selectedIndex ? "true" : undefined}
              className="min-w-0 shrink-0 grow-0 basis-[72vw] origin-center pr-4 will-change-transform"
            >
              <PortfolioSlide
                item={item}
                className="relative aspect-[3/4]"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PortfolioDesktopTrack({ slides }: { slides: PortfolioItem[] }) {
  const reduceMotion = useReducedMotion();
  // When motion is reduced we drop the seamless duplicate and let the user
  // scroll the strip themselves instead of auto-scrolling it forever.
  const items = reduceMotion ? slides : [...slides, ...slides];
  const trackRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (reduceMotion) return;
    const track = trackRef.current;
    if (!track) return;

    let animation: Animation | null = null;

    const start = () => {
      animation?.cancel();
      const setStart = track.children[0] as HTMLElement | undefined;
      const loopPoint = track.children[slides.length] as
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
        { duration: 140000, iterations: Infinity, easing: "linear" },
      );
    };

    start();

    const onResize = () => start();
    window.addEventListener("resize", onResize);

    return () => {
      animation?.cancel();
      window.removeEventListener("resize", onResize);
    };
  }, [slides, reduceMotion]);

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
        className={cn(
          "pb-6",
          reduceMotion ? "overflow-x-auto" : "overflow-hidden",
        )}
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
  // Start from the source order (matches SSR to avoid a hydration mismatch),
  // then reshuffle on mount so every visit shows a fresh sequence.
  const [slides, setSlides] = useState<PortfolioItem[]>(portfolio);

  useEffect(() => {
    // Intentional: the reshuffle must happen after hydration so server and
    // client render the same initial order (no hydration mismatch).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSlides(shuffle(portfolio));
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section className="pt-10 pb-2 md:pt-16 md:pb-4">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6 px-8 md:mb-16 md:px-12">
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
          <PortfolioDesktopTrack slides={slides} />
        ) : (
          <PortfolioMobileCarousel slides={slides} />
        )}
      </div>
    </section>
  );
}

function Craft() {
  return (
    <section className="px-8 pt-0 pb-20 md:px-12 md:pt-0 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, delay: 0.1, ease: easeOut }}
        className="grid grid-cols-1 font-heading text-xl leading-[1.25] font-light md:grid-cols-3 md:text-3xl lg:text-4xl"
      >
        <p className="px-8 py-6 text-center md:py-2">B. Inspired</p>
        <p className="px-8 py-6 text-center md:py-2">B. Unique</p>
        <p className="px-8 py-6 text-center md:py-2">B. You</p>
      </motion.div>
    </section>
  );
}

function HouseRules() {
  return (
    <section id="afspraken" className="scroll-mt-20 px-8 py-20 md:px-12 md:py-32">
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
      className="scroll-mt-20 px-8 py-10 md:px-12 md:py-16"
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
        <div className="flex flex-col md:pr-10">
          <p className="text-[11px] uppercase tracking-[0.3em] opacity-60">
            {"// Adres"}
          </p>
          <div className="mt-6">
            <a
              href="https://maps.app.goo.gl/zUR6iJKpnHLFi1uZ9"
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-baseline gap-4"
            >
              <span className="font-heading text-xl leading-tight font-light md:text-2xl">
                Steenstraat 3A, 9340 Lede
              </span>
              <ArrowUpRightIcon className="relative top-[0.1em] size-6 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:items-end md:pl-10 md:text-right">
          <p className="mt-6 font-heading text-2xl leading-tight font-light md:mt-10">
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
      <MotionConfig reducedMotion="user">
        <div id="top" className="bg-background text-foreground min-h-screen">
          <IntroOverlay />
          <Header />
          <About />
          <Portfolio />
          <Craft />
          <HouseRules />
          <Footer />
        </div>
      </MotionConfig>
    </IconContext.Provider>
  );
}
