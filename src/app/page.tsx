import { Approach } from "@/components/approach";
import { Contact, Footer } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Toolbox } from "@/components/toolbox";
import { Work } from "@/components/work";
import { education, experience, profile, site } from "@/content/profile";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.summary,
    email: `mailto:${profile.email}`,
    ...(site.url ? { url: site.url } : {}),
    address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
    worksFor: { "@type": "Organization", name: experience[0].company, url: experience[0].companyUrl },
    alumniOf: { "@type": "CollegeOrUniversity", name: education.school },
    knowsLanguage: profile.languages,
    sameAs: [profile.linkedin.href],
  };

  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <div className="mt-20 sm:mt-28">
          <Work />
          <Approach />
          <Experience />
          <Toolbox />
          <Contact />
        </div>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
