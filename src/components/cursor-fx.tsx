"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const CursorFX = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const x = useSpring(0, { stiffness: 300, damping: 30, mass: 0.4 });
  const y = useSpring(0, { stiffness: 300, damping: 30, mass: 0.4 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, .interactive"
      );
      setIsHovering(!!interactive);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver as any);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver as any);
    };
  }, [x, y]);

  // Hide cursor on touch devices
  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) {
      document.documentElement.classList.add("cursor-touch");
    }
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[200] mix-blend-normal [--pio-pink:#E554C7]">
      {/* Dot */}
      <motion.div
        style={{ translateX: x, translateY: y }}
        className="will-change-transform"
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-black/90 shadow-[0_0_0_2px_#fff_inset]"
          style={{ width: 6, height: 6, opacity: 0.9 }}
        />
      </motion.div>
      {/* Ring */}
      <motion.div
        style={{ translateX: x, translateY: y }}
        className="will-change-transform"
        transition={{ type: "spring", stiffness: 140, damping: 16 }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${
            isHovering ? "border-[var(--pio-pink)]" : "border-black/70"
          } transition-[width,height,border-color,background-color] duration-150`}
          style={{ width: isHovering ? 44 : 28, height: isHovering ? 44 : 28 }}
        />
      </motion.div>
      <style>{`
        .cursor-touch { cursor: auto !important; }
        @media (hover: none) { .cursor-touch { cursor: auto !important; } }
        html, body { cursor: none; }
        a, button, [role="button"], input, textarea, select, .interactive { cursor: none; }
      `}</style>
    </div>
  );
};

export default CursorFX;