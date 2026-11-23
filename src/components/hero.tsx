import Image from "next/image";
import { glance, profile, site } from "@/content/profile";
import { ArrowDown, Download, LinkedIn, Mail, MapPin, WhatsApp } from "./icons";
import { Reveal } from "./reveal";
import { Em } from "./section";

export function Hero() {
  const { contact } = profile;

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-16">
        <div>
          <Reveal>
            <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px]">
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-ink-2">
                <MapPin className="size-3.5 text-accent" />
                {contact.location}
              </span>
              <span className="text-muted">{profile.workingWith}</span>
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 text-[clamp(2.7rem,7vw,5.25rem)] font-medium leading-[0.98] tracking-[-0.04em]">
              Mobile products, led from <Em>first requirement</Em> to&nbsp;<Em accent>store release.</Em>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              I&apos;m <span className="text-ink">{profile.name}</span>. {profile.intro}
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-[15px] font-medium text-accent-ink transition-transform hover:-translate-y-0.5"
            >
              See selected work
              <ArrowDown className="size-4" />
            </a>
            <a
              href={site.cvFile}
              download
              className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-surface px-6 text-[15px] font-medium transition-colors hover:border-ink/40"
            >
              <Download className="size-4" />
              Download CV
            </a>
            <span className="ml-1 flex items-center gap-1">
              <SocialLink href={`mailto:${profile.email}`} label="Email">
                <Mail className="size-[18px]" />
              </SocialLink>
              <SocialLink href={profile.linkedin.href} label="LinkedIn" external>
                <LinkedIn className="size-[18px]" />
              </SocialLink>
              {contact.whatsapp && (
                <SocialLink href={`https://wa.me/${contact.whatsapp}`} label="WhatsApp" external>
                  <WhatsApp className="size-[18px]" />
                </SocialLink>
              )}
            </span>
          </Reveal>
        </div>

        <Reveal delay={200} className="mx-auto w-full max-w-[19rem] lg:mx-0 lg:max-w-none">
          <figure className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-[28px] border border-accent/50"
            />
            <div className="relative overflow-hidden rounded-[28px] border border-line bg-surface-2 shadow-card">
              <Image
                src="/images/ahmad-amhan-portrait.jpg"
                alt={`Portrait of ${profile.name}`}
                width={672}
                height={840}
                priority
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-5 pb-4 pt-14 text-white">
                <span className="block text-[15px] font-medium">{profile.name}</span>
                <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-white/70">
                  {profile.title}
                </span>
              </figcaption>
            </div>
          </figure>
        </Reveal>
      </div>

      <Reveal delay={120} className="mx-auto mt-16 max-w-6xl px-5 sm:mt-24 sm:px-8">
        <dl className="grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {glance.map((g) => (
            <div
              key={g.label}
              className="border-b border-line py-5 sm:pr-6 lg:border-b-0 lg:border-l lg:pl-6 lg:first:border-l-0 lg:first:pl-0"
            >
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{g.label}</dt>
              <dd className="mt-2 text-[15px] leading-snug text-ink-2">{g.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}

function SocialLink({
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
      className="grid size-11 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-ink"
    >
      {children}
    </a>
  );
}
