import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { education, experience, products, profile, site, skills } from "@/content/profile";
import { cvVariants } from "@/lib/cv-variants";
import "./cv.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(cvVariants()).map((variant) => ({ variant }));
}

export const metadata: Metadata = {
  title: "CV",
  robots: { index: false },
};

export default async function CvPage({ params }: { params: Promise<{ variant: string }> }) {
  const { variant } = await params;
  const contact = cvVariants()[variant];
  if (!contact) notFound();

  const website = site.url ? site.url.replace(/^https?:\/\//, "").replace(/\/$/, "") : null;

  return (
    <div className="cv-screen">
      <div className="cv-toolbar">
        <Link href="/">← Back to site</Link>
        <a href={site.cvFile} download className="cv-toolbar-primary">
          Download PDF
        </a>
      </div>

      <article className="cv">
        <header className="cv-header">
          <div>
            <h1>{profile.name}</h1>
            <p className="cv-title">{profile.title}</p>
            {/* Two plain rows, so the PDF text stream keeps contact details right under the name. */}
            <p className="cv-contact">
              {contact.location}
              <Dot />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              {contact.phone && (
                <>
                  <Dot />
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
                </>
              )}
            </p>
            <p className="cv-contact cv-contact-second">
              <a href={profile.linkedin.href}>{profile.linkedin.label}</a>
              {website && (
                <>
                  <Dot />
                  <a href={site.url}>{website}</a>
                </>
              )}
            </p>
          </div>
          <Image
            src="/images/ahmad-amhan-avatar.jpg"
            alt=""
            width={480}
            height={480}
            className="cv-photo"
            priority
          />
        </header>

        <section>
          <h2>Summary</h2>
          <p>{profile.summary}</p>
        </section>

        <section>
          <h2>Work experience</h2>
          {experience.map((role) => (
            <div key={role.id} className="cv-role">
              <div className="cv-role-head">
                <h3>{role.role}</h3>
                <span className="cv-dates">
                  {role.start} – {role.end}
                </span>
              </div>
              <p className="cv-company">
                {role.companyUrl ? <a href={role.companyUrl}>{role.company}</a> : role.company}
                {role.context ? ` · ${role.context}` : ""} · {role.location}
              </p>
              <ul>
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2>Selected products &amp; published apps</h2>
          <div className="cv-products">
            {products.map((product) => (
              <div key={product.name} className="cv-product">
                <h3>
                  {product.name} <span>— {product.kind}</span>
                </h3>
                <p>
                  <strong>{product.role}.</strong> {product.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="cv-keep">
          <h2>Skills</h2>
          <dl className="cv-skills">
            {skills.map((group) => (
              <div key={group.group}>
                <dt>{group.group}</dt>
                <dd>{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="cv-keep">
          <h2>Education &amp; languages</h2>
          <div className="cv-role-head">
            <h3>
              {education.degree} — {education.specialization}
            </h3>
            <span className="cv-dates">{education.period}</span>
          </div>
          <p className="cv-company">
            {education.school} · {education.place}
          </p>
          <p className="cv-small">University projects: {education.projects.join("; ")}.</p>
          <p className="cv-languages">
            <strong>Languages:</strong> {profile.languages.join(", ")}
          </p>
        </section>
      </article>
    </div>
  );
}

function Dot() {
  return <span className="cv-dot"> · </span>;
}
