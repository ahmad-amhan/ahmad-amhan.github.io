"use client";

import { useEffect, useState } from "react";
import { profile, site } from "@/content/profile";
import { Briefcase, Download, Grid, Layers, Mail, Route } from "./icons";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { id: "work", label: "Work", Icon: Grid },
  { id: "approach", label: "Approach", Icon: Route },
  { id: "experience", label: "Experience", Icon: Briefcase },
  { id: "toolbox", label: "Toolbox", Icon: Layers },
  { id: "contact", label: "Contact", Icon: Mail },
];

/**
 * Desktop: a floating pill at the top.
 * Phone: a bottom dock with icons, like the tab bar of an app.
 */
export function Nav() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      // Back in the hero: no section is current.
      if (window.scrollY < 300) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <div
          className={`mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 rounded-full border pl-2 pr-2 transition-[background-color,border-color,box-shadow] duration-300 ${
            scrolled ? "border-line bg-bg/75 shadow-card backdrop-blur-xl" : "border-transparent"
          }`}
        >
          <a href="#top" className="group flex items-center gap-3 rounded-full pr-3" aria-label={`${profile.name}, back to top`}>
            <span className="grid size-10 place-items-center rounded-full bg-accent font-display text-[15px] font-extrabold tracking-tight text-accent-ink transition-transform duration-300 group-hover:rotate-[-12deg]">
              AA
            </span>
            <span className="font-display text-[15px] font-semibold tracking-tight">{profile.name}</span>
          </a>

          <nav aria-label="Sections" className="hidden md:block">
            <ul className="flex items-center gap-0.5">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={active === link.id ? "true" : undefined}
                    className={`block rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                      active === link.id ? "bg-ink text-bg" : "text-muted hover:text-ink"
                    }`}
                  >
                    {link.label}
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
              className="btn-shine inline-flex h-10 items-center gap-2 rounded-full bg-ink px-4 text-sm font-semibold text-bg"
            >
              <Download className="size-4" />
              CV
            </a>
          </div>
        </div>
      </header>

      <nav
        aria-label="Sections"
        className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden"
      >
        <ul className="mx-auto flex max-w-md items-stretch justify-between rounded-[22px] border border-line bg-bg/80 p-1.5 shadow-card backdrop-blur-xl">
          {links.map(({ id, label, Icon }) => (
            <li key={id} className="flex-1">
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={`flex flex-col items-center gap-1 rounded-2xl py-2 text-[10px] font-medium transition-colors duration-300 ${
                  active === id ? "bg-accent text-accent-ink" : "text-muted"
                }`}
              >
                <Icon className="size-5" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
