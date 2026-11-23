"use client";

import { useEffect, useState } from "react";
import { profile, site } from "@/content/profile";
import { Close, Download, Menu } from "./icons";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { id: "work", label: "Work" },
  { id: "approach", label: "Approach" },
  { id: "experience", label: "Experience" },
  { id: "toolbox", label: "Toolbox" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        open
          ? "border-b border-line bg-bg"
          : scrolled
            ? "border-b border-line bg-bg/80 backdrop-blur-xl"
            : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-3" aria-label={`${profile.name}, back to top`}>
          <span className="grid size-9 place-items-center rounded-xl bg-ink font-mono text-[13px] font-medium tracking-tight text-bg transition-transform group-hover:-rotate-6">
            AA
          </span>
          <span className="hidden text-[15px] font-medium tracking-tight sm:block">{profile.name}</span>
        </a>

        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-line bg-surface/70 p-1 backdrop-blur">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  aria-current={active === l.id ? "true" : undefined}
                  className={`block rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                    active === l.id ? "bg-ink text-bg" : "text-muted hover:text-ink"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={site.cvFile}
            download
            className="hidden h-10 items-center gap-2 rounded-full bg-ink px-4 text-sm font-medium text-bg transition-opacity hover:opacity-85 sm:inline-flex"
          >
            <Download className="size-4" />
            CV
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full border border-line bg-surface text-ink md:hidden"
          >
            {open ? <Close className="size-[18px]" /> : <Menu className="size-[18px]" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Sections"
          className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-bg px-5 pb-8 pt-2 md:hidden"
        >
          <ul>
            {links.map((l, i) => (
              <li key={l.id} className="border-b border-line">
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-4 text-2xl tracking-tight"
                >
                  {l.label}
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.cvFile}
            download
            className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ink text-sm font-medium text-bg"
          >
            <Download className="size-4" />
            Download CV
          </a>
        </nav>
      )}
    </header>
  );
}
