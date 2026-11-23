import type { CSSProperties, ReactNode } from "react";
import { Reveal } from "./reveal";

export function Section({
  id,
  index,
  label,
  title,
  lead,
  children,
}: {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 sm:mb-16">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-muted">
            <span className="text-accent-text">[ {index} ]</span> {label}
          </p>
          <div className={`grid gap-6 ${lead ? "lg:grid-cols-[1.25fr_1fr] lg:items-end" : ""}`}>
            <h2
              id={`${id}-title`}
              className="text-balance font-display text-[clamp(2.4rem,6.2vw,4.75rem)] font-extrabold leading-[0.95] tracking-[-0.045em]"
            >
              {title}
            </h2>
            {lead && <p className="max-w-lg text-lg leading-relaxed text-muted lg:justify-self-end lg:pb-2">{lead}</p>}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

/** Highlighted words inside a heading. */
export function Hl({ children }: { children: ReactNode }) {
  return <span className="hl">{children}</span>;
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-surface-2/60 px-3 py-1 text-[13px] leading-5 text-ink-2 transition-colors hover:border-accent-text hover:text-accent-text">
      {children}
    </span>
  );
}

/**
 * Splits text into words that rise into place one after another.
 * The words stay real text, so screen readers and search engines read a normal sentence.
 */
export function Rise({ text, from = 0, highlight = false }: { text: string; from?: number; highlight?: boolean }) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <span key={`${word}-${i}`}>
          <span className="rise">
            <span className={highlight ? "hl" : undefined} style={{ "--i": from + i } as CSSProperties}>
              {word}
            </span>
          </span>{" "}
        </span>
      ))}
    </>
  );
}
