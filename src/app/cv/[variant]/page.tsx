import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { education, experience, products, profile, site, skills } from "@/content/profile";
import { cvVariants } from "@/lib/cv-variants";
import "./cv.css";

/*
 * This page is written for CV parsers (ATS and AI screening) first:
 * one column, real text only, no photo, no colour, standard section names,
 * and contact details as plain text directly under the name.
 */

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
          <h1>{profile.name}</h1>
          <p className="cv-title">{profile.title}</p>
          <p className="cv-contact">
            {contact.location}
            {" | "}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            {contact.phone && (
              <>
                {" | "}
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
              </>
            )}
          </p>
          <p className="cv-contact">
            <a href={profile.linkedin.href}>{profile.linkedin.label}</a>
            {website && (
              <>
                {" | "}
                <a href={site.url}>{website}</a>
              </>
            )}
          </p>
        </header>

        <section>
          <h2>Summary</h2>
          <p>{profile.summary}</p>
        </section>

        <section>
          <h2>Work Experience</h2>
          {experience.map((role) => (
            <div key={role.id} className="cv-role">
              <div className="cv-role-head">
                <h3>{role.role}</h3>
                <span className="cv-dates">
                  {role.start} – {role.end}
                </span>
              </div>
              <p className="cv-company">
                {role.company}
                {role.context ? ` (${role.context})` : ""}, {role.location}
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
          <h2>Projects</h2>
          {products.map((product) => (
            <p key={product.name} className="cv-project">
              <strong>
                {product.name} ({product.kind})
              </strong>
              {" – "}
              {product.role}. {product.description}
            </p>
          ))}
        </section>

        <section className="cv-keep">
          <h2>Skills</h2>
          {skills.map((group) => (
            <p key={group.group} className="cv-skill">
              <strong>{group.group}:</strong> {group.items.join(", ")}
            </p>
          ))}
        </section>

        <section className="cv-keep">
          <h2>Education</h2>
          <div className="cv-role-head">
            <h3>{education.degree}</h3>
            <span className="cv-dates">{education.period}</span>
          </div>
          <p className="cv-company">
            {education.school}, {education.place}
          </p>
          <p>University projects: {education.projects.join("; ")}.</p>
        </section>

        <section className="cv-keep">
          <h2>Languages</h2>
          <p>{profile.languages.join(", ")}</p>
        </section>
      </article>
    </div>
  );
}
