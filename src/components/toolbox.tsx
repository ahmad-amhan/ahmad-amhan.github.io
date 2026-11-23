import { skills } from "@/content/profile";
import { Reveal } from "./reveal";
import { Chip, Hl, Section } from "./ui";

/** Column spans for the bento layout, in the same order as `skills`. */
const spans = ["md:col-span-3", "md:col-span-3", "md:col-span-2", "md:col-span-2", "md:col-span-2"];

export function Toolbox() {
  return (
    <Section
      id="toolbox"
      index="04"
      label="Toolbox"
      title={
        <>
          What I <Hl>work with.</Hl>
        </>
      }
    >
      <ul className="grid gap-4 md:grid-cols-6">
        {skills.map((group, i) => (
          <li key={group.group} className={spans[i] ?? "md:col-span-2"}>
            <Reveal delay={(i % 3) * 90} className="h-full">
              <article className="spot h-full rounded-[28px] border border-line bg-surface p-6 sm:p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-text">0{i + 1}</p>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.03em]">{group.group}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Chip>{item}</Chip>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
