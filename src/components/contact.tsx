import { profile, site } from "@/content/profile";
import { ArrowUp, ArrowUpRight, Download, LinkedIn, Mail, WhatsApp } from "./icons";
import { Reveal } from "./reveal";
import { Hl } from "./ui";

export function Contact() {
  const { contact } = profile;

  return (
    <section id="contact" aria-labelledby="contact-title" className="overflow-x-clip py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="glow-ring rounded-[36px]">
          <div className="spot relative overflow-hidden rounded-[36px] bg-surface px-7 py-14 sm:px-14 sm:py-20">
            <div
              aria-hidden="true"
              className="orb -right-20 -top-24 size-80 bg-[rgb(var(--glow))]"
            />
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
              <span className="text-accent-text">[ 05 ]</span> Contact
            </p>
            <h2
              id="contact-title"
              className="mt-6 max-w-4xl font-display text-[clamp(2.6rem,7.4vw,6rem)] font-extrabold leading-[0.93] tracking-[-0.05em]"
            >
              Have a product to ship? <Hl>Let&apos;s talk.</Hl>
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
              The fastest way to reach me is email or WhatsApp. I&apos;m based in {contact.location} and work in Arabic
              and English.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-10 inline-flex items-center gap-3 break-all font-display text-2xl font-bold tracking-[-0.03em] underline decoration-line underline-offset-8 transition-colors hover:text-accent-text sm:text-4xl"
            >
              {profile.email}
              <ArrowUpRight className="size-7 shrink-0" />
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
      className={`btn-shine inline-flex h-12 items-center gap-2 rounded-full px-6 text-[15px] font-semibold transition-colors ${
        primary
          ? "bg-accent text-accent-ink"
          : "border border-line bg-surface-2/60 hover:border-accent-text hover:text-accent-text"
      }`}
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      {/* Extra bottom padding on phones keeps the footer clear of the dock. */}
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 pb-28 pt-8 text-sm text-muted sm:px-8 md:pb-8">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.contact.location}
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-accent-text">
          Back to top
          <ArrowUp className="size-4" />
        </a>
      </div>
    </footer>
  );
}
