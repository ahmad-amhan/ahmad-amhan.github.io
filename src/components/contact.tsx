import { profile, site } from "@/content/profile";
import { ArrowUpRight, Download, LinkedIn, Mail, WhatsApp } from "./icons";
import { Reveal } from "./reveal";
import { Em } from "./section";

export function Contact() {
  const { contact } = profile;

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-ink px-7 py-14 text-bg sm:px-14 sm:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-accent opacity-25 blur-3xl"
            />
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] opacity-60">
              <span>05</span>
              <span className="h-px w-8 bg-current opacity-40" />
              Contact
            </p>
            <h2
              id="contact-title"
              className="mt-6 max-w-3xl text-[clamp(2.3rem,5.6vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.035em]"
            >
              Have a product to ship? <Em>Let&apos;s talk.</Em>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed opacity-70">
              The fastest way to reach me is email or WhatsApp. I&apos;m based in {contact.location} and work in Arabic
              and English.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-10 inline-flex items-center gap-3 break-all text-xl font-medium underline decoration-current/30 underline-offset-8 transition-colors hover:decoration-current sm:text-3xl"
            >
              {profile.email}
              <ArrowUpRight className="size-6 shrink-0" />
            </a>

            <div className="mt-10 flex flex-wrap gap-3">
              <ContactButton href={`mailto:${profile.email}`} primary>
                <Mail className="size-4" />
                Email me
              </ContactButton>
              {contact.whatsapp && (
                <ContactButton href={`https://wa.me/${contact.whatsapp}`} external>
                  <WhatsApp className="size-4" />
                  WhatsApp
                </ContactButton>
              )}
              <ContactButton href={profile.linkedin.href} external>
                <LinkedIn className="size-4" />
                LinkedIn
              </ContactButton>
              <ContactButton href={site.cvFile} download>
                <Download className="size-4" />
                Download CV
              </ContactButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactButton({
  href,
  primary = false,
  external = false,
  download = false,
  children,
}: {
  href: string;
  primary?: boolean;
  external?: boolean;
  download?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download: true } : {})}
      className={`inline-flex h-12 items-center gap-2 rounded-full px-6 text-[15px] font-medium transition-transform hover:-translate-y-0.5 ${
        primary ? "bg-accent text-accent-ink" : "border border-current/25 hover:border-current/60"
      }`}
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-sm text-muted sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs">Built with Next.js · {profile.contact.location}</p>
      </div>
    </footer>
  );
}
