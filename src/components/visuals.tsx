import type { ReactNode } from "react";
import { WhatsApp } from "./icons";

/**
 * Abstract, code-drawn illustrations. They show the *shape* of each product
 * (a catalog behind one link; three connected apps). They are deliberately not
 * screenshots, so nothing here reproduces a real product screen.
 */

function Phone({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative aspect-[9/18.5] rounded-[26px] border border-line bg-bg p-1.5 shadow-card ${className}`}
    >
      <div className="absolute left-1/2 top-2.5 h-1 w-10 -translate-x-1/2 rounded-full bg-line" />
      <div className="flex h-full flex-col gap-2 overflow-hidden rounded-[20px] bg-surface px-2.5 pb-2.5 pt-6">
        {children}
      </div>
    </div>
  );
}

const Bar = ({ w, strong = false }: { w: string; strong?: boolean }) => (
  <span className={`block h-1.5 rounded-full ${strong ? "bg-ink/70" : "bg-line"}`} style={{ width: w }} />
);

/** Deterministic QR-like pattern (decorative, encodes nothing). */
function QrMark() {
  const n = 11;
  const cells: boolean[] = [];
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      const finder = (x < 3 && y < 3) || (x > n - 4 && y < 3) || (x < 3 && y > n - 4);
      const quiet = (x === 3 && y < 4) || (y === 3 && x < 4) || (x === n - 4 && y < 4) || (y === 3 && x > n - 5) || (x === 3 && y > n - 5) || (y === n - 4 && x < 4);
      cells.push(finder || (!quiet && (x * 7 + y * 13 + ((x * y) % 5)) % 3 === 0));
    }
  }
  return (
    <div className="grid size-full grid-cols-11 gap-[2px]">
      {cells.map((on, i) => (
        <span key={i} className={`aspect-square rounded-[1.5px] ${on ? "bg-ink" : "bg-transparent"}`} />
      ))}
    </div>
  );
}

export function GoVisualVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto flex w-full max-w-lg items-center justify-center gap-5 py-4 sm:gap-7">
      <Phone className="w-[48%] max-w-[232px]">
        <div className="flex items-center gap-2">
          <span className="size-6 rounded-full bg-accent" />
          <span className="flex flex-1 flex-col gap-1">
            <Bar w="70%" strong />
            <Bar w="45%" />
          </span>
        </div>
        <div className="flex gap-1.5">
          <span className="h-4 w-10 rounded-full bg-ink" />
          <span className="h-4 w-8 rounded-full bg-surface-2" />
          <span className="h-4 w-9 rounded-full bg-surface-2" />
        </div>
        <div className="grid flex-1 grid-cols-2 gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col gap-1 rounded-lg border border-line p-1">
              <span
                className={`block flex-1 rounded-md ${i % 3 === 0 ? "bg-accent-soft" : "bg-surface-2"}`}
                style={{ minHeight: 28 }}
              />
              <Bar w="80%" />
              <span className="block h-1.5 w-1/2 rounded-full bg-accent" />
            </div>
          ))}
        </div>
        <span className="flex h-6 items-center justify-center gap-1 rounded-full bg-ink text-[8px] font-medium text-bg">
          <WhatsApp className="size-2.5" />
          Ask on WhatsApp
        </span>
      </Phone>

      <div className="flex w-[42%] max-w-[200px] flex-col gap-3">
        <div className="rounded-2xl border border-line bg-surface p-3 shadow-card">
          <QrMark />
        </div>
        <div className="rounded-2xl border border-line bg-surface px-3 py-2.5 shadow-card">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">One link</p>
          <p className="mt-1 text-xs font-medium">Always current</p>
        </div>
        <div className="flex gap-1.5">
          <span className="rounded-full bg-ink px-2.5 py-1 font-mono text-[10px] text-bg">AR</span>
          <span className="rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[10px] text-muted">
            EN
          </span>
          <span className="rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[10px] text-muted">
            RTL
          </span>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="size-6 shrink-0 rounded-md bg-surface-2" />
      <span className="flex flex-1 flex-col gap-1">
        <Bar w="75%" strong />
        <Bar w="50%" />
      </span>
    </div>
  );
}

export function BulbulVisual() {
  return (
    <div aria-hidden="true" className="mx-auto w-full max-w-lg py-6">
      <div className="flex items-end justify-center gap-3">
        {/* Customer */}
        <div className="w-[31%] max-w-[158px] translate-y-3">
          <Phone>
            <span className="h-4 rounded-full bg-surface-2" />
            <Row />
            <Row />
            <Row />
            <div className="mt-auto rounded-lg bg-accent-soft p-1.5">
              <div className="relative h-1 rounded-full bg-line">
                <span className="absolute inset-y-0 left-0 w-2/3 rounded-full bg-accent" />
                <span className="absolute -top-1 left-2/3 size-3 -translate-x-1/2 rounded-full border-2 border-surface bg-accent" />
              </div>
            </div>
          </Phone>
          <Label>Customer</Label>
        </div>

        {/* Vendor */}
        <div className="w-[31%] max-w-[158px] -translate-y-3">
          <Phone>
            {[0, 1].map((i) => (
              <div key={i} className="flex flex-col gap-1.5 rounded-lg border border-line p-1.5">
                <span
                  className={`h-2 w-9 rounded-full ${i === 0 ? "bg-accent" : "bg-surface-2"}`}
                />
                <Bar w="85%" strong />
                <Bar w="60%" />
                {i === 0 && (
                  <span className="flex gap-1">
                    <span className="h-3 flex-1 rounded-full bg-ink" />
                    <span className="h-3 flex-1 rounded-full bg-surface-2" />
                  </span>
                )}
              </div>
            ))}
            <div className="mt-auto flex flex-col gap-1">
              <Bar w="100%" />
              <Bar w="70%" />
            </div>
          </Phone>
          <Label>Vendor</Label>
        </div>

        {/* Driver */}
        <div className="w-[31%] max-w-[158px] translate-y-3">
          <Phone>
            <div className="relative flex-1 overflow-hidden rounded-lg bg-surface-2">
              <svg viewBox="0 0 100 120" className="absolute inset-0 size-full" preserveAspectRatio="none">
                <path d="M0 30h100M0 78h100M28 0v120M70 0v120" stroke="var(--line)" strokeWidth="1.5" fill="none" />
                <path
                  d="M18 100C18 70 48 78 50 56S78 40 82 18"
                  stroke="var(--accent)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <span className="absolute bottom-[12%] left-[13%] size-2.5 rounded-full border-2 border-surface bg-ink" />
              <span className="absolute right-[13%] top-[10%] size-2.5 rounded-full border-2 border-surface bg-accent" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Bar w="70%" strong />
              <span className="h-4 rounded-full bg-accent" />
            </div>
          </Phone>
          <Label>Driver</Label>
        </div>
      </div>
    </div>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{children}</p>
  );
}
