import { useState } from "react";
import { motion } from "motion/react";
import { GraduationCap, HeartHandshake, Quote, Terminal } from "lucide-react";
import { Reveal, Section, SectionHeading } from "./Reveal";
import { experience, services, skillGroups, volunteering } from "@/lib/portfolio-data";

export function About() {
  return (
    <Section id="about">
      <SectionHeading index="02" title="About Me" />
      <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <Reveal>
            <p>
              My route into security started with a simple question: what happens when a system is
              used in a way it was never designed for? Following that question through networks,
              Linux boxes, and web applications turned into a cybersecurity track at university and
              a habit of building labs where I can test things properly.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p>
              Today I work hands-on across penetration testing, network security, and vulnerability
              assessment, with practical experience in AI and machine learning-based security
              solutions. I have studied CCNA, CompTIA Security+, and eJPTv1 subject areas, and I
              apply that knowledge with Python, networking, Linux, and the standard security
              toolchain.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              What holds my attention is the analysis: identifying vulnerabilities, mapping attack
              surfaces, and applying offensive security techniques — then using AI to make that work
              faster and smarter.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="flex flex-wrap gap-2 pt-2">
              {["Cybersecurity", "Networking", "Linux", "Python", "AI / Machine Learning"].map(
                (t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-foreground/80"
                  >
                    {t}
                  </li>
                ),
              )}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <figure className="glass relative h-full rounded-xl p-7">
            <Quote className="size-7 text-primary" aria-hidden="true" />
            <blockquote className="mt-5 font-display text-xl leading-snug sm:text-2xl">
              &ldquo;I don&apos;t just study vulnerabilities — I try to understand why they exist,
              how they can be exploited, and how systems can become more resilient.&rdquo;
            </blockquote>
            <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Mohamed Ramadan
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}

export function Education() {
  const areas = [
    "Cybersecurity",
    "Computer Networks",
    "Programming",
    "Databases",
    "Artificial Intelligence",
  ];
  return (
    <Section id="education">
      <SectionHeading index="03" title="Education" />
      <Reveal className="mt-10">
        <article className="glass relative overflow-hidden rounded-xl p-7 sm:p-9">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <span className="rounded-md border border-primary/40 bg-primary/10 p-3 text-primary">
                <GraduationCap className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-semibold sm:text-2xl">
                  B.Sc. in Computer Science — Cybersecurity Track
                </h3>
                <p className="mt-1 text-muted-foreground">Beni-Suef National University</p>
              </div>
            </div>
            <span className="font-mono text-xs tracking-widest text-primary">2023 — 2027</span>
          </div>
          <div className="mt-7 border-t border-border pt-6">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Relevant areas
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((a) => (
                <li key={a} className="flex items-center gap-2 text-sm text-foreground/85">
                  <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-7 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Languages — Arabic (Native) · English (Fluent)
          </div>
        </article>
      </Reveal>
    </Section>
  );
}

export function Skills() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = skillGroups[activeIdx]!;
  return (
    <Section id="skills">
      <SectionHeading
        index="04"
        title="Skills"
        lead="Grouped by how I actually use them — offence, networks, tooling, and the systems underneath."
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-[260px_1fr]">
        <Reveal>
          <ul className="flex flex-wrap gap-2 lg:flex-col">
            {skillGroups.map((g, i) => (
              <li key={g.name} className="lg:w-full">
                <button
                  type="button"
                  onClick={() => setActiveIdx(i)}
                  aria-pressed={i === activeIdx}
                  className={`w-full rounded-md border px-4 py-3 text-left font-mono text-[11px] uppercase tracking-widest transition-colors ${
                    i === activeIdx
                      ? "border-primary/50 bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {g.name}
                </button>
              </li>
            ))}
          </ul>
        </Reveal>

        <motion.ul
          key={active.name}
          className="grid gap-3 sm:grid-cols-2"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.05 } } }}
        >
          {active.items.map((item) => (
            <motion.li
              key={item}
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.35 }}
              className="card-hover glass flex items-center gap-3 rounded-lg p-4"
            >
              <Terminal className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading index="05" title="Experience & Training" />
      <ol className="mt-12 space-y-10 border-l border-border pl-6 sm:pl-10">
        {experience.map((e, i) => (
          <li key={e.role} className="relative">
            <span
              className="absolute -left-[calc(1.5rem+5px)] top-2 size-2.5 rounded-full bg-primary sm:-left-[calc(2.5rem+5px)]"
              aria-hidden="true"
            />
            <Reveal delay={i * 0.05}>
              <p className="font-mono text-[11px] tracking-widest text-primary">
                ENTRY {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{e.role}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.org}</p>
              <p className="mt-3 max-w-2xl leading-relaxed text-foreground/80">{e.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal className="mt-14">
        <div className="glass rounded-xl p-7">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Beyond security — volunteering
          </p>
          <div className="mt-4 flex items-start gap-4">
            <span className="rounded-md border border-cyan/40 bg-cyan/10 p-3 text-cyan">
              <HeartHandshake className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-lg font-semibold">
                {volunteering.role} — {volunteering.org}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {volunteering.description}
              </p>
              <p className="mt-2 leading-relaxed text-muted-foreground">{volunteering.additional}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        index="06"
        title="What I Can Do"
        lead="Areas of capability I work in — inside authorized labs and training environments."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.04}>
            <article className="card-hover glass h-full rounded-xl p-6">
              <p className="font-mono text-xs tracking-widest text-primary">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
