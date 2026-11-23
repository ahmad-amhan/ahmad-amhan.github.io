import { featured, products, type FeaturedProject, type Product } from "@/content/profile";
import { ArrowUpRight, domainIcon } from "./icons";
import { Reveal } from "./reveal";
import { Chip, Em, Section } from "./section";
import { BulbulVisual, GoVisualVisual } from "./visuals";

const visuals = { govisual: GoVisualVisual, bulbul: BulbulVisual } as const;

export function Work() {
  return (
    <Section
      id="work"
      index="01"
      label="Selected work"
      title={
        <>
          Hands-on <Em>engineering,</Em> and products I&apos;ve <Em accent>led.</Em>
        </>
      }
      lead="Two products I work on as an engineer, then the platforms I own and lead at Unifi Solutions."
    >
      <div className="flex flex-col gap-6">
        {featured.map((project, i) => (
          <Reveal key={project.id}>
            <FeaturedCard project={project} flip={i % 2 === 1} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mb-6 mt-20 flex flex-wrap items-end justify-between gap-4">
        <h3 className="text-2xl font-medium tracking-[-0.02em] sm:text-3xl">
          Led at <Em>Unifi Solutions</Em>
        </h3>
        <p className="max-w-md text-[15px] leading-relaxed text-muted">
          B2B and white-label products, delivered to Google Play and the App Store.
        </p>
      </Reveal>

      <ul className="grid gap-4 md:grid-cols-2">
        {products.map((product, i) => (
          <li key={product.name}>
            <Reveal delay={(i % 2) * 70} className="h-full">
              <ProductCard product={product} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function FeaturedCard({ project, flip }: { project: FeaturedProject; flip: boolean }) {
  const Visual = visuals[project.id];

  return (
    <article className="grid overflow-hidden rounded-[28px] border border-line bg-surface shadow-card lg:grid-cols-2">
      <div className="flex flex-col p-7 sm:p-10">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          <span className="text-accent">{project.role}</span>
          <span className="h-px w-5 bg-line" />
          {project.period}
        </p>
        <h3 className="mt-5 text-4xl font-medium tracking-[-0.035em] sm:text-5xl">{project.name}</h3>
        <p className="mt-4 font-serif text-2xl italic leading-snug text-ink-2">{project.headline}</p>
        <p className="mt-5 leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-6 flex flex-col gap-2.5">
          {project.points.map((point) => (
            <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-ink-2">
              <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-accent" />
              {point}
            </li>
          ))}
        </ul>

        <ul className="mt-7 flex flex-wrap gap-1.5" aria-label="Technology">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Chip>{tech}</Chip>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-2.5 pt-1 lg:mt-auto lg:pt-8">
          {project.links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex h-11 items-center gap-1.5 rounded-full px-5 text-sm font-medium transition-transform hover:-translate-y-0.5 ${
                i === 0 ? "bg-ink text-bg" : "border border-line bg-bg text-ink"
              }`}
            >
              {link.label}
              <ArrowUpRight className="size-4" />
            </a>
          ))}
        </div>
      </div>

      <div
        className={`flex items-center border-t border-line bg-surface-2/60 p-6 sm:p-10 lg:border-l lg:border-t-0 ${
          flip ? "lg:order-first lg:border-l-0 lg:border-r" : ""
        }`}
      >
        <Visual />
      </div>
    </article>
  );
}

function ProductCard({ product }: { product: Product }) {
  const Icon = domainIcon[product.domain];

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-6 transition-colors hover:border-ink/30 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-11 place-items-center rounded-2xl bg-accent-soft text-accent">
          <Icon className="size-5" />
        </span>
        <span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
          {product.role}
        </span>
      </div>
      <h4 className="mt-5 text-xl font-medium tracking-[-0.02em]">{product.name}</h4>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{product.kind}</p>
      <p className="mt-4 text-[15px] leading-relaxed text-muted">{product.description}</p>
      <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 pt-1 lg:mt-auto lg:pt-5">
        {product.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
            >
              {link.label}
              <ArrowUpRight className="size-4" />
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
