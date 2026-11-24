import Image from "next/image";
import type { CSSProperties } from "react";
import { featured, products, type FeaturedProject, type Product, type Shot } from "@/content/profile";
import { ArrowUpRight, Shield, linkIcon } from "./icons";
import { Reveal } from "./reveal";
import { Chip, Hl, Section } from "./ui";

export function Work() {
  return (
    <Section
      id="work"
      index="01"
      label="Selected work"
      title={
        <>
          Apps people use, <Hl>live on the stores.</Hl>
        </>
      }
      lead="Two products I work on as an engineer, then the platforms I own and lead at Unifi Solutions."
    >
      <div className="flex flex-col gap-6">
        {featured.map((project) => (
          <Reveal key={project.id}>
            <FeaturedCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mb-8 mt-24 flex flex-wrap items-end justify-between gap-4">
        <h3 className="font-display text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">
          Led at <Hl>Unifi Solutions</Hl>
        </h3>
        <p className="max-w-sm text-[15px] leading-relaxed text-muted">
          B2B and white-label products. Each card links to its public store listing.
        </p>
      </Reveal>

      <ul className="grid gap-4 md:grid-cols-2">
        {products.map((product, i) => (
          <li key={product.name}>
            <Reveal delay={(i % 2) * 90} className="h-full">
              <ProductCard product={product} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function FeaturedCard({ project }: { project: FeaturedProject }) {
  return (
    <article className="spot overflow-hidden rounded-[32px] border border-line bg-surface shadow-card">
      <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:p-14">
        <div>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            <span className="text-accent-text">{project.role}</span>
            <span aria-hidden="true">/</span>
            {project.period}
          </p>
          <h3 className="mt-5 font-display text-6xl font-extrabold tracking-[-0.05em] sm:text-7xl">{project.name}</h3>
          <p className="mt-5 text-xl font-medium leading-snug text-ink sm:text-2xl">{project.headline}</p>
          <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {project.links.map((link, i) => {
              const Icon = linkIcon(link.label);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-shine inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold transition-colors ${
                    i === 0
                      ? "bg-accent text-accent-ink"
                      : "border border-line bg-surface-2/60 text-ink hover:border-accent-text hover:text-accent-text"
                  }`}
                >
                  <Icon className="size-4" />
                  {link.label}
                  <ArrowUpRight className="size-4 opacity-60" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="lg:pt-10">
          <ul className="flex flex-col">
            {project.points.map((point, i) => (
              <li key={point} className="flex gap-4 border-t border-line py-4 text-[15px] leading-relaxed text-ink-2 first:border-t-0 first:pt-0">
                <span className="font-mono text-xs leading-6 text-accent-text">0{i + 1}</span>
                {point}
              </li>
            ))}
          </ul>
          <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technology">
            {project.stack.map((tech) => (
              <li key={tech}>
                <Chip>{tech}</Chip>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <PhoneStrip shots={project.shots} />
      <p className="px-7 pb-7 pt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted sm:px-10 lg:px-14">
        {project.shotsSource}
      </p>
    </article>
  );
}

/**
 * A slowly moving row of phones showing real screens. It pauses on hover.
 * The second copy only exists to make the loop seamless, so it is hidden from
 * assistive tech and removed entirely when motion is reduced.
 */
function PhoneStrip({ shots }: { shots: Shot[] }) {
  return (
    <div className="marquee border-t border-line bg-surface-2/40 pb-4 pt-10">
      <div className="marquee-track" style={{ "--marquee-duration": `${shots.length * 9}s` } as CSSProperties}>
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            data-dup={copy === 1 ? "" : undefined}
            aria-hidden={copy === 1 ? "true" : undefined}
            className="flex shrink-0 items-start"
          >
            {shots.map((shot, i) => (
              <li key={shot.src} className={`mr-6 w-[180px] shrink-0 sm:mr-8 sm:w-[216px] ${i % 2 === 1 ? "pt-8" : ""}`}>
                <figure className="phone-float" style={{ "--i": i } as CSSProperties}>
                  <div className="rounded-[30px] border border-line bg-black p-1.5 shadow-card">
                    <Image
                      src={shot.src}
                      alt={copy === 0 ? shot.alt : ""}
                      width={440}
                      height={956}
                      sizes="216px"
                      // Eager on purpose: the row moves, and a lazy image can slide into view blank.
                      loading="eager"
                      fetchPriority="low"
                      className="aspect-[440/956] w-full rounded-[24px] object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {shot.label}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="spot flex h-full flex-col rounded-[28px] border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent-text/50 sm:p-7">
      <div className="flex items-start gap-4">
        {product.icon ? (
          <Image
            src={product.icon}
            alt=""
            width={160}
            height={160}
            loading="lazy"
            className="size-14 shrink-0 rounded-2xl border border-line object-cover"
          />
        ) : (
          <span className="grid size-14 shrink-0 place-items-center rounded-2xl border border-line bg-surface-2 text-accent-text">
            <Shield className="size-6" />
          </span>
        )}
        <div className="min-w-0 flex-1">
          <h4 className="font-display text-xl font-bold tracking-[-0.03em] sm:text-2xl">{product.name}</h4>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{product.kind}</p>
        </div>
      </div>

      <p className="mt-5 inline-flex self-start rounded-full border border-accent-text/40 px-3 py-1 text-xs font-semibold text-accent-text">
        {product.role}
      </p>
      <p className="mt-4 text-[15px] leading-relaxed text-muted">{product.description}</p>
      {product.brands && (
        <p className="mt-3 text-[13px] leading-relaxed text-ink-2">
          <span className="font-semibold text-accent-text">{product.brands} white-label apps</span> on the stores.
          {product.brandsNote ? ` ${product.brandsNote}` : ""}
        </p>
      )}

      <ul className="mt-6 flex flex-wrap gap-2 pt-1 lg:mt-auto lg:pt-6">
        {product.links.map((link) => {
          const Icon = linkIcon(link.label);
          return (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-line bg-surface-2/60 px-4 text-sm font-medium text-ink-2 transition-colors hover:border-accent-text hover:text-accent-text"
              >
                <Icon className="size-4" />
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
