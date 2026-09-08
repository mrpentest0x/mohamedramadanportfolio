import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { About, Education, Experience, Services, Skills } from "@/components/site/CoreSections";
import { Projects } from "@/components/site/Projects";
import {
  Achievements,
  Approach,
  CallToAction,
  Certifications,
  Testimonials,
} from "@/components/site/ClosingSections";
import { Contact } from "@/components/site/Contact";
import { profile } from "@/lib/portfolio-data";

const title = "Mohamed Ramadan — Cybersecurity Engineer & Penetration Tester";
const description =
  "Cybersecurity portfolio of Mohamed Ramadan: penetration testing, network security, vulnerability assessment, and AI-assisted security work.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Services />
        <Projects />
        <Certifications />
        <Achievements />
        <Testimonials />
        <Approach />
        <CallToAction />
        <Contact />
      </main>
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            {profile.name} · {profile.title}
          </p>
          <Link
            to="/thank-you"
            className="font-mono text-[11px] uppercase tracking-widest text-primary hover:underline"
          >
            Thank you page →
          </Link>
        </div>
      </footer>
    </div>
  );
}
