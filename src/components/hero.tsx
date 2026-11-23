import Image from "next/image";
import type { CSSProperties } from "react";
import { domains, profile, roles, site, stats } from "@/content/profile";
import { ArrowDown, Download, LinkedIn, Mail, WhatsApp } from "./icons";
import { Reveal } from "./reveal";
import { Rise } from "./ui";

const marqueeWords = [...domains, "Flutter", "Android", "iOS", "Flutter Web", "Store releases", "White-label apps"];

export function Hero() {
  const { contact } = profile;

  return (
    <section id="top" data-glow className="relative overflow-hidden pt-32 sm:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="dot-grid absolute inset-0" />
        <div className="orb -left-24 top-10 size-[26rem] bg-[rgb(var(--glow))]" />
        <div className="orb right-[-8rem] top-48 size-[30rem] bg-[rgb(var(--glow-2))] [animation-delay:-6s]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-line bg-surface/70 py-1.5 pl-3 pr-4 text-[13px] text-ink-2 backdrop-blur">
            <span className="pulse-dot size-2 rounded-full bg-accent" />
            {contact.location}
            <span className="hidden text-muted sm:inline">· {profile.workingWith}</span>
          </p>
        </Reveal>

        <h1 className="mt-7 font-display text-[clamp(2.75rem,7.6vw,6.25rem)] font-extrabold leading-[0.93] tracking-[-0.05em]">
          <span className="md:block">
            <Rise text="I lead mobile products" />
          </span>
          <span className="md:block">
            <Rise text="from first requirement" from={4} />
          </span>
          <span className="md:block">
            <Rise text="to" from={7} />
            <Rise text="store release." from={8} highlight />
          </span>
        </h1>

        <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:gap-5">
          <div className="lg:col-span-5 lg:pr-4">
            <Reveal delay={350}>
              <p className="text-lg leading-relaxed text-muted sm:text-xl">
                I&apos;m <span className="font-medium text-ink">{profile.name}</span>. {profile.intro}
              </p>
            </Reveal>

            <Reveal delay={450} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="btn-shine inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-[15px] font-semibold text-accent-ink"
              >
                See the work
                <ArrowDown className="size-4" />
              </a>
              <a
                href={site.cvFile}
                download
                className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-surface/70 px-6 text-[15px] font-semibold backdrop-blur transition-colors hover:border-accent-text hover:text-accent-text"
              >
                <Download className="size-4" />
                Download CV
              </a>
            </Reveal>

            <Reveal delay={550} className="mt-6 flex items-center gap-1">
              <Social href={`mailto:${profile.email}`} label="Email">
                <Mail className="size-[18px]" />
              </Social>
              <Social href={profile.linkedin.href} label="LinkedIn" external>
                <LinkedIn className="size-[18px]" />
              </Social>
              {contact.whatsapp && (
                <Social href={`https://wa.me/${contact.whatsapp}`} label="WhatsApp" external>
                  <WhatsApp className="size-[18px]" />
                </Social>
              )}
            </Reveal>
          </div>

          <Reveal delay={300} className="mx-auto w-full max-w-[17rem] lg:col-span-3 lg:mx-0 lg:max-w-none">
            <figure
              data-tilt
              className="tilt relative overflow-hidden rounded-[28px] border border-line bg-surface shadow-card"
            >
              <Image
                src="/images/ahmad-amhan-portrait.jpg"
                alt={`Portrait of ${profile.name}`}
                width={360}
                height={450}
                priority
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-4 pb-4 pt-16 text-white">
                <span className="block font-display text-lg font-bold tracking-tight">{profile.name}</span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-white/70">
                  {profile.title}
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid gap-4 lg:col-span-4 lg:gap-5">
            <Reveal delay={400}>
              <div className="spot h-full rounded-[28px] border border-line bg-surface p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Roles I&apos;ve held</p>
                {/* The moving ticker is decorative; the same roles are listed as plain text for assistive tech. */}
                <p className="sr-only">{roles.join(", ")}</p>
                <div
                  aria-hidden="true"
                  className="ticker mt-3 font-display text-[1.7rem] font-bold tracking-[-0.03em] text-accent-text"
                >
                  <ul>
                    {[...roles, roles[0]].map((role, i) => (
                      <li key={`${role}-${i}`}>{role}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <dl className="grid grid-cols-3 gap-3">
                {stats().map((stat) => (
                  <div key={stat.label} className="spot rounded-[22px] border border-line bg-surface p-4">
                    <dd className="font-display text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl lg:text-4xl xl:text-5xl">
                      <span data-count={stat.value}>{stat.value}</span>
                      <span className="text-accent-text">{stat.suffix}</span>
                    </dd>
                    <dt className="mt-2 text-xs leading-snug text-muted">{stat.label}</dt>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Decorative: every word here also appears as text in the Work and Toolbox sections. */}
      <div aria-hidden="true" className="marquee mt-20 border-y border-line py-5 sm:mt-28 sm:py-6">
        <div className="marquee-track" style={{ "--marquee-duration": "42s" } as CSSProperties}>
          {[0, 1].map((copy) => (
            <ul key={copy} data-dup={copy === 1 ? "" : undefined} className="flex shrink-0 items-center">
              {marqueeWords.map((word) => (
                <li
                  key={word}
                  className="flex items-center gap-8 pr-8 font-display text-3xl font-extrabold uppercase tracking-[-0.03em] text-ink/25 sm:text-5xl"
                >
                  {word}
                  <span className="text-xl text-accent-text sm:text-3xl">✦</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

function Social({
  href,
  label,
  external = false,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="grid size-11 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-accent-text"
    >
      {children}
    </a>
  );
}
