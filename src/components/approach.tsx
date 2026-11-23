import { capabilities } from "@/content/profile";
import { Reveal } from "./reveal";
import { Em, Section } from "./section";

export function Approach() {
  return (
    <Section
      id="approach"
      index="02"
      label="Approach"
      title={
        <>
          One person across <Em>product,</Em> <Em>code</Em> and <Em accent>release.</Em>
        </>
      }
      lead="Most delays happen in the handoffs: between the client and the team, and between the build and the store. I work on both sides of each one."
    >
      <ol className="grid gap-4 md:grid-cols-3">
        {capabilities.map((cap, i) => (
          <li key={cap.title}>
            <Reveal delay={i * 90} className="h-full">
              <article className="flex h-full flex-col rounded-3xl border border-line bg-surface p-7">
                <p className="font-mono text-xs text-accent">0{i + 1}</p>
                <h3 className="mt-8 text-2xl font-medium tracking-[-0.02em]">{cap.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{cap.body}</p>
                <ul className="mt-6 flex flex-col border-t border-line">
                  {cap.items.map((item) => (
                    <li key={item} className="border-b border-line py-3 text-[15px] leading-snug text-ink-2 last:border-b-0 last:pb-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
