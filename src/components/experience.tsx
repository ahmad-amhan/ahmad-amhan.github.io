import { education, experience, profile } from "@/content/profile";
import { ArrowUpRight } from "./icons";
import { Reveal } from "./reveal";
import { Em, Section } from "./section";

/** The site shows the headline bullets per role; the CV carries the full list. */
const SITE_BULLETS = 4;

export function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      label="Experience"
      title={
        <>
          From Flutter developer to <Em accent>product owner.</Em>
        </>
      }
    >
      <ol className="border-t border-line">
        {experience.map((role) => (
          <li key={role.id} className="border-b border-line">
            <Reveal className="grid gap-x-10 gap-y-3 py-8 md:grid-cols-[200px_1fr] md:py-10">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-2">
                  {role.start} – {role.end}
                </p>
                <p className="mt-1.5 text-sm text-muted">{role.location}</p>
              </div>
              <div>
                <h3 className="text-xl font-medium tracking-[-0.02em] sm:text-2xl">{role.role}</h3>
                <p className="mt-1.5 flex flex-wrap items-center gap-x-2 text-[15px] text-muted">
                  {role.companyUrl ? (
                    <a
                      href={role.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-accent"
                    >
                      {role.company}
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  ) : (
                    <span className="font-medium text-ink">{role.company}</span>
                  )}
                  {role.context && (
                    <>
                      <span aria-hidden="true">·</span>
                      {role.context}
                    </>
                  )}
                </p>
                <ul className="mt-5 flex max-w-3xl flex-col gap-2.5">
                  {role.bullets.slice(0, SITE_BULLETS).map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-[15px] leading-relaxed text-ink-2">
                      <span aria-hidden="true" className="mt-[0.65em] h-px w-3 shrink-0 bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal className="mt-10 grid gap-4 md:grid-cols-[1.4fr_1fr]">
        <article className="rounded-3xl border border-line bg-surface p-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Education</p>
          <h3 className="mt-4 text-xl font-medium tracking-[-0.02em]">{education.degree}</h3>
          <p className="mt-3 text-[15px] text-muted">
            {education.school}, {education.place} · {education.period}
          </p>
        </article>
        <article className="rounded-3xl border border-line bg-surface p-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Languages</p>
          <ul className="mt-4 flex flex-col gap-1">
            {profile.languages.map((language) => (
              <li key={language} className="text-xl font-medium tracking-[-0.02em]">
                {language}
              </li>
            ))}
          </ul>
        </article>
      </Reveal>
    </Section>
  );
}
