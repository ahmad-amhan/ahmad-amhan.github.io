import { skills } from "@/content/profile";
import { Reveal } from "./reveal";
import { Chip, Em, Section } from "./section";

export function Toolbox() {
  return (
    <Section
      id="toolbox"
      index="04"
      label="Toolbox"
      title={
        <>
          What I <Em accent>work with.</Em>
        </>
      }
    >
      <dl className="border-t border-line">
        {skills.map((group) => (
          <Reveal key={group.group} className="grid gap-4 border-b border-line py-7 md:grid-cols-[200px_1fr] md:gap-10">
            <dt className="text-lg font-medium tracking-[-0.01em]">{group.group}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Chip>{item}</Chip>
                  </li>
                ))}
              </ul>
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
