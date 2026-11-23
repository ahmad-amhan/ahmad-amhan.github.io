import { capabilities } from "@/content/profile";
import { Reveal } from "./reveal";
import { Hl, Section } from "./ui";

export function Approach() {
  return (
    <Section
      id="approach"
      index="02"
      label="Approach"
      title={
        <>
          Product, code and release. <Hl>One owner.</Hl>
        </>
      }
      lead="Most delays happen in the handoffs: between the client and the team, and between the build and the store. I work on both sides of each one."
    >
      <div>
        <ol className="grid gap-4 md:grid-cols-3">
          {capabilities.map((capability, i) => (
            <li key={capability.title}>
              <Reveal delay={i * 140} className="h-full">
                <article className="spot flex h-full flex-col rounded-[28px] border border-line bg-surface p-7">
                  {/* The line draws itself out of each step toward the next one. */}
                  <div className="-mr-7 flex items-center gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent font-display text-lg font-extrabold text-accent-ink">
                      {i + 1}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`draw h-px flex-1 bg-gradient-to-r from-[rgb(var(--glow))] ${
                        i === capabilities.length - 1 ? "to-transparent" : "to-[rgb(var(--glow-2))]"
                      }`}
                    />
                  </div>
                  <h3 className="mt-7 font-display text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                    {capability.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{capability.body}</p>
                  <ul className="mt-6 flex flex-col">
                    {capability.items.map((item) => (
                      <li key={item} className="border-t border-line py-3 text-[15px] leading-snug text-ink-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
