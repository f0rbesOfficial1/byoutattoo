"use client";

import { FlowerIcon } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";

export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    document.documentElement.classList.add("custom-cursor");

    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      el.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
      el.style.opacity = "1";
    };
    const onLeave = () => {
      const el = ref.current;
      if (!el) return;
      el.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[9999] opacity-0 will-change-transform"
      style={{ mixBlendMode: "difference" }}
    >
      <FlowerIcon weight="thin" size={32} color="white" />
    </div>
  );
}
