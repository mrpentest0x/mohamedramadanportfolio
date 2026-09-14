import {
  Award,
  BookOpen,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  MessageSquareQuote,
} from "lucide-react";
import { Reveal, Section, SectionHeading } from "./Reveal";
import {
  CV_URL,
  achievements,
  approach,
  courses,
  profile,
  studiedTracks,
  testimonials,
} from "@/lib/portfolio-data";

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading index="08" title="Certifications & Courses" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.04}>
            <article className="card-hover glass flex h-full flex-col gap-4 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <BookOpen className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold leading-snug">{c.name}</h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {c.provider}
                    {c.detail ? ` · ${c.detail}` : ""}
                  </p>
                  <p className="mt-2 break-words font-mono text-[10px] tracking-widest text-cyan">
                    ID {c.code} · {c.date}
                  </p>
                </div>
              </div>
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group/cert mt-auto inline-flex items-center justify-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-2.5 text-sm font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                View Certificate
                <ExternalLink
                  className="size-3.5 transition-transform duration-300 group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <div className="rounded-xl border border-cyan/30 bg-cyan/5 p-7">
          <p className="font-mono text-[11px] uppercase tracking-widest text-cyan">
            Currently studied / prepared
          </p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {studiedTracks.map((t) => (
              <li key={t} className="rounded-md border border-border px-4 py-2 text-sm font-medium">
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            These are study and preparation areas, not completed certifications.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading index="09" title="Achievements" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.04}>
            <article className="card-hover glass h-full rounded-xl p-6">
              <Award className="size-5 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-base font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeading index="10" title="Testimonials" />
      <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {testimonials.map((testimonial, i) => (
          <Reveal key={testimonial.name} delay={i * 0.04} className="mb-5 break-inside-avoid">
            <article className="card-hover glass overflow-hidden rounded-xl">
              <a
                href={testimonial.image}
                target="_blank"
                rel="noreferrer noopener"
                className="group block overflow-hidden border-b border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
                aria-label={`View ${testimonial.name}'s original testimonial`}
              >
                <img
                  src={testimonial.image}
                  alt={`LinkedIn testimonial from ${testimonial.name}`}
                  loading="lazy"
                  className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.015]"
                />
              </a>
              <div className="flex items-start gap-3 p-5">
                <MessageSquareQuote className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold">{testimonial.name}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Approach() {
  return (
    <Section id="approach" className="relative overflow-hidden">
      <div
        className="tech-grid pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      />
      <div className="relative">
        <SectionHeading
          index="11"
          title="My Security Approach"
          lead="A repeatable process — from first look at the surface to concrete recommendations."
        />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {approach.map((a, i) => (
            <li key={a.step} className="bg-background">
              <Reveal delay={i * 0.06}>
                <div className="group relative h-full p-8 transition-colors hover:bg-primary/5">
                  <span className="font-mono text-4xl font-bold text-primary/25 transition-colors group-hover:text-primary/60">
                    {a.step}
                  </span>
                  <h3 className="mt-4 text-lg font-bold uppercase tracking-wide">{a.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                  <span
                    className="mt-6 block h-px w-10 bg-primary transition-all duration-300 group-hover:w-24"
                    aria-hidden="true"
                  />
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export function CallToAction() {
  return (
    <Section id="cta" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 -bottom-32 h-64 opacity-20 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--primary), transparent)" }}
        aria-hidden="true"
      />
      <Reveal className="relative">
        <p className="eyebrow">12 — Let&apos;s work together</p>
        <h2 className="mt-5 max-w-3xl text-3xl font-bold uppercase leading-tight sm:text-5xl">
          Let&apos;s find the weakness before the attacker does.
        </h2>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          Whether it&apos;s a security project, technical collaboration, or a new challenge, I&apos;m
          always interested in exploring how systems can be tested, understood, and secured.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="glow-primary rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Contact Me
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Linkedin className="size-4" /> LinkedIn
          </a>
          <span className="inline-flex items-center gap-2 rounded-md border border-dashed border-border px-5 py-3 text-sm font-semibold text-muted-foreground">
            <Github className="size-4" /> {profile.githubLabel}
          </span>
          <a
            href={CV_URL}
            download
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Download className="size-4" /> Download CV
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
