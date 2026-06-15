"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type Ripple = { id: number; x: number; y: number };

const easeOut = [0.16, 1, 0.3, 1] as const;

type HoverRippleProps = React.ComponentProps<"div"> & {
  children: React.ReactNode;
};

export function HoverRipple({
  children,
  className,
  ...props
}: HoverRippleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const idRef = useRef(0);
  const lastRippleRef = useRef(0);
  const isHoveringRef = useRef(false);

  const addRipple = useCallback((clientX: number, clientY: number) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const id = ++idRef.current;

    setRipples((prev) => [...prev, { id, x, y }]);
  }, []);

  const removeRipple = useCallback((id: number) => {
    setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
  }, []);

  const onPointerEnter = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      isHoveringRef.current = true;
      addRipple(e.clientX, e.clientY);
    },
    [addRipple],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isHoveringRef.current) return;

      const now = Date.now();
      if (now - lastRippleRef.current < 650) return;

      lastRippleRef.current = now;
      addRipple(e.clientX, e.clientY);
    },
    [addRipple],
  );

  const onPointerLeave = useCallback(() => {
    isHoveringRef.current = false;
  }, []);

  return (
    <div
      ref={ref}
      {...props}
      className={cn("relative", className)}
      onPointerEnter={onPointerEnter}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {children}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
      >
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.span
              key={ripple.id}
              className="absolute rounded-full border border-foreground/25 bg-foreground/10"
              style={{
                left: ripple.x,
                top: ripple.y,
                translate: "-50% -50%",
              }}
              initial={{ width: 0, height: 0, opacity: 0.55 }}
              animate={{
                width: "min(140vmax, 900px)",
                height: "min(140vmax, 900px)",
                opacity: 0,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: easeOut }}
              onAnimationComplete={() => removeRipple(ripple.id)}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
