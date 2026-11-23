"use client";

import { Moon, Sun } from "./icons";

/**
 * Both icons are always rendered and CSS picks one from `data-theme`, so the
 * button is correct on first paint without waiting for React.
 */
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private mode: the choice just lasts for this page view.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between dark and light theme"
      className="grid size-10 place-items-center rounded-full border border-line bg-surface/80 text-ink-2 backdrop-blur transition-colors hover:border-accent-text hover:text-accent-text"
    >
      <Sun className="size-[18px] light:hidden" />
      <Moon className="hidden size-[18px] light:block" />
    </button>
  );
}
