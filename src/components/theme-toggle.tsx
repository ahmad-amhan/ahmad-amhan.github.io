"use client";

import { Moon, Sun } from "./icons";

/**
 * Both icons are always rendered and CSS picks one from `data-theme`, so the
 * button is correct on first paint without waiting for React.
 */
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
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
      aria-label="Switch between light and dark theme"
      className="grid size-10 place-items-center rounded-full border border-line bg-surface text-ink-2 transition-colors hover:border-ink/40 hover:text-ink"
    >
      <Moon className="size-[18px] dark:hidden" />
      <Sun className="hidden size-[18px] dark:block" />
    </button>
  );
}
