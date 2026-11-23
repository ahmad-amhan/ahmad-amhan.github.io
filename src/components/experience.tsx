import { education, experience, profile } from "@/content/profile";
import { ArrowUpRight } from "./icons";
import { Reveal } from "./reveal";
import { Hl, Section } from "./ui";

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
          From Flutter developer to <Hl>product owner.</Hl>
        </>
      }
    >
      <div className="relative">
        {/* The rail fills as the timeline scrolls through the viewport. */}
        <div aria-hidden="true" data-progress className="rail absolute bottom-2 left-[7px] top-2 w-px rounded-full">
          <span />
        </div>

        <ol className="flex flex-col gap-4">
          {experience.map((role) => (
            <li key={role.id} className="relative pl-9 sm:pl-12">
              <span
                aria-hidden="true"
                className="absolute left-0 top-9 size-[15px] rounded-full border-2 border-accent bg-bg"
              />
              <Reveal>
                <article className="spot rounded-[28px] border border-line bg-surface p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                    <div>
                      <h3 className="font-display text-2xl font-bold tracking-[-0.03em] sm:text-3xl">{role.role}</h3>
                      <p className="mt-1.5 flex flex-wrap items-center gap-x-2 text-[15px] text-muted">
                        {role.companyUrl ? (
                          <a
                            href={role.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-0.5 font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent-text"
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
                        <span aria-hidden="true">·</span>
                        {role.location}
                      </p>
                    </div>
                    <p className="rounded-full border border-line bg-surface-2/60 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-2">
                      {role.start} – {role.end}
                    </p>
                  </div>
                  <ul className="mt-5 grid gap-x-10 gap-y-2.5 lg:grid-cols-2">
                    {role.bullets.slice(0, SITE_BULLETS).map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-[15px] leading-relaxed text-ink-2">
                        <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      <Reveal className="mt-6 grid gap-4 pl-9 sm:pl-12 md:grid-cols-[1.4fr_1fr]">
        <article className="spot rounded-[28px] border border-line bg-surface p-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Education</p>
          <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.03em]">{education.degree}</h3>
          <p className="mt-2 text-[15px] text-muted">
            {education.school}, {education.place} · {education.period}
          </p>
        </article>
        <article className="spot rounded-[28px] border border-line bg-surface p-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Languages</p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1">
            {profile.languages.map((language) => (
              <li key={language} className="font-display text-2xl font-bold tracking-[-0.03em]">
                {language}
              </li>
            ))}
          </ul>
        </article>
      </Reveal>
    </Section>
  );
}
