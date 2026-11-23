"use client";

import { useEffect } from "react";

/**
 * One small client component drives every pointer- and scroll-linked effect,
 * so the sections themselves stay server-rendered:
 *
 * - `.spot` / `[data-glow]`  glow follows the pointer (sets --mx / --my)
 * - `[data-tilt]`            card tilts toward the pointer (sets --rx / --ry)
 * - `[data-progress]`        fills as it scrolls through the viewport (--progress)
 * - `[data-count]`           counts up to its number the first time it is seen
 * - `--scroll` on <html>     page scroll progress, for the top bar
 *
 * The HTML already contains the final numbers and full content, so with JS off
 * or reduced motion on, nothing is missing.
 */
export function Effects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const max = root.scrollHeight - window.innerHeight;
        root.style.setProperty("--scroll", String(max > 0 ? Math.min(1, window.scrollY / max) : 0));
        document.querySelectorAll<HTMLElement>("[data-progress]").forEach((el) => {
          const rect = el.getBoundingClientRect();
          const progress = (window.innerHeight * 0.6 - rect.top) / rect.height;
          el.style.setProperty("--progress", String(Math.max(0, Math.min(1, progress))));
        });
      });
    };

    const onMove = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const glow = target?.closest<HTMLElement>(".spot, [data-glow]");
      if (glow) {
        const rect = glow.getBoundingClientRect();
        glow.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        glow.style.setProperty("--my", `${event.clientY - rect.top}px`);
      }
      if (reduce || event.pointerType === "touch") return;
      const tilt = target?.closest<HTMLElement>("[data-tilt]");
      if (tilt) {
        const rect = tilt.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        tilt.style.setProperty("--ry", `${(x * 10).toFixed(2)}deg`);
        tilt.style.setProperty("--rx", `${(-y * 10).toFixed(2)}deg`);
      }
    };

    const tilts = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));
    const resetTilt = (event: Event) => {
      const el = event.currentTarget as HTMLElement;
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };
    tilts.forEach((el) => el.addEventListener("pointerleave", resetTilt));

    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    let io: IntersectionObserver | undefined;
    if (!reduce && "IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            io?.unobserve(entry.target);
            const el = entry.target as HTMLElement;
            const to = Number(el.dataset.count);
            const started = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - started) / 1100);
              el.textContent = String(Math.round(to * (1 - Math.pow(1 - t, 3))));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        },
        { threshold: 0.6 },
      );
      counters.forEach((el) => io?.observe(el));
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pointermove", onMove);
      tilts.forEach((el) => el.removeEventListener("pointerleave", resetTilt));
      io?.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px]">
      <div className="scroll-progress h-full bg-accent" />
    </div>
  );
}
