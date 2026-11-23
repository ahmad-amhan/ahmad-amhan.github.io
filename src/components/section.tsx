import type { ReactNode } from "react";
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
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className={`mb-12 grid gap-6 sm:mb-16 ${lead ? "lg:grid-cols-[1fr_1.1fr] lg:items-end" : ""}`}>
          <div>
            <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
              <span className="text-accent">{index}</span>
              <span className="h-px w-8 bg-line" />
              {label}
            </p>
            <h2
              id={`${id}-title`}
              className="text-[clamp(2rem,4.4vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.03em]"
            >
              {title}
            </h2>
          </div>
          {lead && <p className="max-w-xl text-lg leading-relaxed text-muted lg:justify-self-end">{lead}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

/** Serif italic accent used inside headings. */
export function Em({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return (
    <em
      className={`whitespace-nowrap font-serif font-normal italic tracking-[-0.01em] ${accent ? "text-accent" : ""}`}
    >
      {children}
    </em>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 text-[13px] leading-5 text-ink-2">
      {children}
    </span>
  );
}
